import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-formcontrol',
  templateUrl: './formcontrol.component.html',
  styleUrls: ['./formcontrol.component.css']
})
export class FormcontrolComponent implements OnInit {

  valor: string;

  formUsuario: FormGroup;
  srcResult: number[];

  /*
   * Para hacerlo mas mantenible podemo hacer uso del FormBuilder
  form = new FormGroup({
    first: new FormControl('', [Validators.required, Validators.minLength(5)]),
    last: new FormControl('', [Validators.required, Validators.minLength(7)])
  });
   */

  constructor(private fb: FormBuilder) {
    this.formUsuario = this.fb.group({
      first: ['', [Validators.required, Validators.minLength(3)]],
      last: ['', [Validators.required, Validators.minLength(4), this.validateFirst]]
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.formUsuario.valid) {
      console.log('recibimos formulario correctamente');
    } else {
      alert('Formulario invalido');
      return;
    }
  }

  validateFirst(control: AbstractControl) {
    const nombre = control.value;
    let error = null;
    if (!nombre.includes('$')) {
      error = {...error, dollar: 'debe ingresar un simbolo dolar'};
    }
    if (!parseFloat(nombre[0])) {
      error = {...error, number: 'debe comenzar con un numero'};
    }
    return error;
  }

  public getError(controlName: string): string {
    let error;
    const control = this.formUsuario.get(controlName);
    if ((control.touched && control.errors != null)) {
      error = JSON.stringify(control.errors);
    }
    return error;
  }

  onFileSelected() {
    const inputNode: any = document.querySelector('#file');

    let result: any[] = [];

    if (typeof (FileReader) !== 'undefined') {
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.srcResult = e.target.result;
        //result.push(e.target.result);
        console.log(this.srcResult);
        const typedArray = new Uint8Array(e.target.result);
        //const array = [typedArray];
        const array= Array.from(typedArray);
        console.log(JSON.stringify(array));

        result.push(array);
      };

      reader.readAsArrayBuffer(inputNode.files[0]);

      console.log(result);

      let miObject: RequestObject = {numeroDoc: '', plantilla: [12]};

      miObject.numeroDoc = '42';
      miObject.plantilla = result;

      console.log(miObject);

    }
  }

  showInterface() {
    let miObject: RequestObject = {numeroDoc: '', plantilla: [12]};

    miObject.numeroDoc = '42712422';
    miObject.plantilla = [12, 13];

    console.log(miObject);
  }
}

export interface RequestObject {
  numeroDoc: string;
  plantilla: number[];
}
