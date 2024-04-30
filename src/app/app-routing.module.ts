import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistraionFormComponent } from './components/registraion-form/registraion-form.component';
import { CounterNgrxComponent } from './components/counter-ngrx/counter-ngrx.component';
import { AsyncJsComponent } from './components/async-js/async-js.component';

const routes: Routes = [
  {
    path:"", redirectTo:"counter", pathMatch:"full"
  },
  {
    path: 'registration',
    component: RegistraionFormComponent,
  },
  {
    path: 'counter',
    component: CounterNgrxComponent,
  },
  {
    path: 'async-js',
    component: AsyncJsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
