import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: false,
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {

  form:FormGroup;

  constructor(private _fb:FormBuilder){
    this.form = this._fb.group({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      reenterPassword: new FormControl('', [Validators.required])
    });
  }


  submitForm = (form:FormGroup) =>{

    if(form.valid){

      alert("Form ok")
    }
    else{
      alert("form is invalid")
    }

  }





}
