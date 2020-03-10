import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {RequestObject} from '../formcontrol/formcontrol.component';

@Component({
  selector: 'app-subirfile',
  templateUrl: './subirfile.component.html',
  styleUrls: ['./subirfile.component.css']
})
export class SubirfileComponent implements OnInit {

  formUsuario: FormGroup;


  srcResult: number[];

  constructor(private fb: FormBuilder) {
    this.formUsuario = this.fb.group({
      comentario: ['', Validators.required]
    })
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.formUsuario.valid) {
      console.log('recibimos formulario correctamente');
      const inputNode: any = document.querySelector('#file');
      if(inputNode.value == ''){
        alert('Debe adjuntar una plantilla xlsx.')
      }

    } else {
      alert('Formulario invalido');
      return;
    }
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
        const array = Array.from(typedArray);
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
}
