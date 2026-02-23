import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from '../first-component/first-component.component';
import { SecondComponentComponent } from '../second-component/second-component.component';
import { TemplateDrivenComponent } from '../template-driven/template-driven.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormComponent } from '../reactive-form/reactive-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ControlValAcessorExampleComponent } from '../control-val-acessor-example/control-val-acessor-example.component';
import { SignalFormExampleComponent } from '../signal-form-example/signal-form-example.component';
import { CustomElementComponent } from '../custom-element/custom-element.component';
import { RXJSPlaygroundComponent } from '../rxjsplayground/rxjsplayground.component';
import { NestedFormComponent } from '../nested-form/nested-form.component';
const routes:Routes = [
  {path: "", component:TemplateDrivenComponent},
  {path:"first", component: FirstComponentComponent},
  {path:"second", component:SecondComponentComponent},
  {path:"templateDriven", component: TemplateDrivenComponent},
  {path:"reactiveForm", component: ReactiveFormComponent},
  {path:"controlValue", component: ControlValAcessorExampleComponent},
  {path:"signalForm", component: SignalFormExampleComponent},
  {path:"rxjs", component:RXJSPlaygroundComponent},
  {path:"nestedf", component: NestedFormComponent}
];

@NgModule({
  declarations: [
    FirstComponentComponent, 
    SecondComponentComponent, 
    TemplateDrivenComponent, 
    ReactiveFormComponent, 
    ControlValAcessorExampleComponent,
    SignalFormExampleComponent,
    CustomElementComponent,
    RXJSPlaygroundComponent,
    NestedFormComponent,

  ],
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
