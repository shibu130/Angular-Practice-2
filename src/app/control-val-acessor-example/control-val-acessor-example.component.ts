import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-control-val-acessor-example',
  standalone: false,
  templateUrl: './control-val-acessor-example.component.html',
  styleUrl: './control-val-acessor-example.component.css'
})
export class ControlValAcessorExampleComponent {

  
  form:FormGroup;

  constructor(private _fb:FormBuilder){

    this.form = this._fb.group({
      value: ['Blessed are the clean of heart for they shall see god']
    });
  }







}
