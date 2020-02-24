import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Heroe, HeroesService} from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe: Heroe;

  constructor(private activatedRoute: ActivatedRoute,
              private heroesService: HeroesService) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params  => {
      console.log(params['id']);
      this.heroe = this.heroesService.getHeroe(params['id']);
    })
  }
}
