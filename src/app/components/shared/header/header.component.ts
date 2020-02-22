import { Component, OnInit } from '@angular/core';
import {HeroesService} from '../../../services/heroes.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private heroesService: HeroesService,
              private router: Router) { }

  ngOnInit() {
  }

  buscarHeroe(termino: string){
    this.router.navigate(['/search', termino]);
    console.log(termino);
  }

}
