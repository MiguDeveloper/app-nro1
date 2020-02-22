import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Heroe, HeroesService} from '../../services/heroes.service';

@Component({
  selector: 'app-heroes-search',
  templateUrl: './heroes-search.component.html',
  styleUrls: ['./heroes-search.component.css']
})
export class HeroesSearchComponent implements OnInit {

  heroes: Heroe[] = [];
  terminoBuscar: string;
  nroResultados: number;

  constructor(private activatedRoute: ActivatedRoute,
              private heroesService: HeroesService,
              private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      let termino = params['termino'];
      this.terminoBuscar = termino;
      console.log(termino);
      this.heroes = this.heroesService.buscarHeroes(termino);
      this.nroResultados = this.heroes.length;
    })
  }

  verHeroe(i: number){
    this.router.navigate(['heroe', i])
  }

}
