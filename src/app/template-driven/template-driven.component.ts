import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  standalone: false,
  templateUrl: './template-driven.component.html',
  styleUrl: './template-driven.component.css'
})
export class TemplateDrivenComponent {

  constructor(){

  }

  submitForm = (form:NgForm)=>{


    if(form.valid){
      alert("ok")
    }
    else{
      alert("form is invalid")
    }


  }



}
