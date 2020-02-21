import {Component, OnInit} from '@angular/core';
import {Heroe, HeroesService} from '../../services/heroes.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  private heroes: Heroe[] = [];

  constructor(private heroesService: HeroesService,
              private router: Router) {
  }

  ngOnInit() {
    this.heroes = this.heroesService.getHeroes();

    console.log(this.heroes);
  }

  verHeroe(indice: number){
    this.router.navigate(['/heroe/', indice]);
  }

}
