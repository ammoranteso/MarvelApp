import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  charactersObservable$?: Observable<any>;
  character?: Promise<any>;

  constructor(
    private characterService: CharacterService
  ) { }


  ngOnInit(): void {
    this.showCharacters();
    // this.testPromise();
  }

  showCharacters(): void {
    this.charactersObservable$ =
      this.characterService.getCharacters().pipe(
        map(res => res.data.results)
      );
  }

  getHeroRoute(id: string): string[] {
    return [`../detail`, id];
  }

  /**
   * Example with promises
   */
  testPromise(): void {
    this.character = this.characterService.getCharacters().toPromise();

    this.character.then((data) => {
      console.log(data);
    }).catch((err) => {
      console.log(err);
    });
  }
}
