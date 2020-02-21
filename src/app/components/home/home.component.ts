import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  frase: any = {
    mensaje: 'Un gran poder requiere una gran responsabilidad',
    autor: 'Ben Parcker'
  };

  estado = false;
  elementos: string[] = ['Cras justo kncke',
    'Dapibus ac facilisis in',
    'Morbi leo risus',
    'Porta ac consecttur ac',
    'Vestibulum at eros'];

  constructor() {
  }

  ngOnInit() {
  }

}
