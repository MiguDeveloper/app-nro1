import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  nombre: string = 'Capita América';
  nombreMiguel: string = 'MiGuel cHinChay hUaRcaya';
  numeros: number [] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI: number = Math.PI;
  porcentaje: number = 0.234;
  salario: number = 12345;
  idioma: string = 'es';
  videoUrl: string = 'https://www.youtube.com/embed/W0jlJ53NXbw';
  activar: boolean = true;
  contrasenia: string = 'esta Es LaContrasenia';

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: 20
    }
  };

  valorPromesa = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('Llego la data');
    }, 4500);
  });

  fecha: Date = new Date();

  constructor() {
  }

  ngOnInit() {
  }

}
