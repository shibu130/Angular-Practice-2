import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from '../first-component/first-component.component';
import { SecondComponentComponent } from '../second-component/second-component.component';
import { TemplateDrivenComponent } from '../template-driven/template-driven.component';
import { FormsModule } from '@angular/forms';

const routes:Routes = [
  {path:"first", component: FirstComponentComponent},
  {path:"second", component:SecondComponentComponent},
  {path:"templateDriven", component: TemplateDrivenComponent}
];

@NgModule({
  declarations: [FirstComponentComponent, SecondComponentComponent, TemplateDrivenComponent],
  imports: [
    CommonModule,
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule,FormsModule]
})
export class DummyComponentsModule { }
