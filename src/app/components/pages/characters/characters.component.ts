import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { CharacterService } from 'src/app/services/character.service';
import { ICharactersResponse } from 'src/app/utils/interfaces/response';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  /**
   * Suscribe the Api response
   */
  charactersObservable$?: Observable<ICharactersResponse[]>;
  /**
   * Example subscription with Promises
   */
  character?: Promise<any>;

  /**
   * The number of pages
   */
  pageSize = 20;

  /**
   * Number of result per page
   */
  pageSizeOptions = [10, 20, 50, 100];
  /**
   * Limit of heroes result
   */
  offset = 0;
  /**
   * Current page
   */
  total?: number;
  currentPage = 0;
  constructor(
    private readonly characterService: CharacterService
  ) { }


  ngOnInit(): void {
    this.showCharacters();
    // this.testPromise();
  }

  /**
   * Allows to get all the heroes
   * @param options Limit of results
   */
  showCharacters(): void {
    this.charactersObservable$ =
      this.characterService.getCharacters({
        limit: this.pageSize,
        offset: this.pageSize * this.currentPage
      }).pipe(
        tap(res => this.total = res.data.total),
        map(res => res.data.results)
      );
  }

  /**
   * Returns a new route navigation
   * @param id HeroId
   * @returns Route with HeroId
   */
  getHeroRoute(id: string): string[] {
    return [`../detail`, id];
  }

  /**
   * Allows to know the page size and the next page
   * @param e PageEvent allows to know the current page
   */
  // tslint:disable-next-line: typedef
  onPageOnChange(e: PageEvent) {
    this.pageSize = e.pageSize;
    this.currentPage = e.pageIndex;
    this.showCharacters();
  }

  /**
   * Example with promises
   */
  testPromise(options: number): void {
    this.character = this.characterService.getCharacters({ limit: this.pageSize, offset: this.offset }).toPromise();

    this.character.then((data) => {
      console.log(data);
    }).catch((err) => {
      console.log(err);
    });
  }
}
