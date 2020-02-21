import {Component, OnInit} from '@angular/core';
import {Heroe, HeroesService} from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  private heroes: Heroe[] = [];

  constructor(private heroesService: HeroesService) {
  }

  ngOnInit() {
    this.heroes = this.heroesService.getHeroes();

    console.log(this.heroes);
  }


}
