import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CharacterController } from '../utils/enums';
import { paramsConvert } from '../utils/functions';
import { IMarvelDataResponse, IPaginationOptions } from '../utils/interfaces/auxiliary';
import { IMarvelApiResponse } from '../utils/interfaces/auxiliary/marvel-api-response.interface';
import { ICharactersResponse } from '../utils/interfaces/response';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  getCharacters(options: IPaginationOptions): Observable<IMarvelApiResponse<IMarvelDataResponse<ICharactersResponse>>> {
    return this.http.get<IMarvelApiResponse<IMarvelDataResponse<ICharactersResponse>>>(
      `${CharacterController.CHARACTER}`, {
      params: paramsConvert(options)
    });
  }

  getCharactersById(id: string): Observable<IMarvelApiResponse<IMarvelDataResponse<ICharactersResponse>>> {
    return this.http.get<IMarvelApiResponse<IMarvelDataResponse<ICharactersResponse>>>(
      `${CharacterController.CHARACTER}/${id}`);
  }

  getComicsById(id: string): Observable<IMarvelApiResponse<IMarvelDataResponse<ICharactersResponse>>> {
    return this.http.get<IMarvelApiResponse<IMarvelDataResponse<ICharactersResponse>>>(
      `${CharacterController.CHARACTER}/${id}/comics`);
  }

}
