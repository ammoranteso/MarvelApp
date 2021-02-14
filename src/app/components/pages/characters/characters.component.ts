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

  constructor(
    private characterService: CharacterService
  ) { }


  ngOnInit(): void {
    this.showCharacters();
  }

  showCharacters(): void {
    this.charactersObservable$ =
      this.characterService.getCharacters().pipe(
        map( res => res.data.results)
      );
  }

  getHeroRoute(id: string): string[] {
    return [`../detail`, id];
  }

}
