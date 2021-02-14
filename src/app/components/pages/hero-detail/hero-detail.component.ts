import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  heroId?: string;
  characterObservable$: Observable<any>;

  constructor(
    private readonly characterService: CharacterService,
    private readonly route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.showComicsById();
  }

  showComicsById(): void {
    this.characterObservable$ = this.characterService
      .getComicsById(this.route.snapshot.paramMap.get('id')).pipe(
        tap(res => ({ res }))
      );
  }

  showCharacterById(): void {
    this.characterService
      .getCharactersById(this.route.snapshot.paramMap.get('id')).subscribe(
        (data => console.log(data))
      );
  }

}
