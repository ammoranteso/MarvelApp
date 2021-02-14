import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<any> {
    return this.http.get(
      `${environment.apiUrl}/characters?ts=${environment.ts}&apikey=${environment.apiKey}&hash=${environment.hash}`);
  }

  getCharactersById(id: string): Observable<{}> {
    return this.http.get(
      `${environment.apiUrl}/characters/${id}?ts=${environment.ts}&apikey=${environment.apiKey}&hash=${environment.hash}`);
  }

  getComicsById(id: string): Observable<{}> {
    return this.http.get(
      `${environment.apiUrl}/characters/${id}/comics?ts=${environment.ts}&apikey=${environment.apiKey}&hash=${environment.hash}`);
  }

}
