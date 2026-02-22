import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DummyComponentsModule } from './dummy-components/dummy-components.module';

const routes: Routes = [
// lazy loading
{path:"", loadChildren: ()=> import ("./dummy-components/dummy-components.module").then(e=>e.DummyComponentsModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
