import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InquinamentoComponent} from './inquinamento/inquinamento.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'inquinamento-milano', component: InquinamentoComponent },
  { path: '',   redirectTo: 'home', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: HomeComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
