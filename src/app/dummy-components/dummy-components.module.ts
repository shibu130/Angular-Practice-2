import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from '../first-component/first-component.component';
import { SecondComponentComponent } from '../second-component/second-component.component';
import { TemplateDrivenComponent } from '../template-driven/template-driven.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormComponent } from '../reactive-form/reactive-form.component';
import { ReactiveFormsModule } from '@angular/forms';
const routes:Routes = [
  {path: "", component:TemplateDrivenComponent},
  {path:"first", component: FirstComponentComponent},
  {path:"second", component:SecondComponentComponent},
  {path:"templateDriven", component: TemplateDrivenComponent},
  {path:"reactiveForm", component: ReactiveFormComponent},
  {path: "", component:TemplateDrivenComponent}
];

@NgModule({
  declarations: [FirstComponentComponent, SecondComponentComponent, TemplateDrivenComponent, ReactiveFormComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule,FormsModule]
})
export class DummyComponentsModule { }
