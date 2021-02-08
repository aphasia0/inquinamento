import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InquinamentoComponent} from './inquinamento/inquinamento.component';


const routes: Routes = [
  { path: 'inquinamento-milano', component: InquinamentoComponent },
  { path: '',     loadChildren: () => import('./home/home.module').then((m) => m.HomeModule), },
  { path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }, // redirect to `first-component`
  { path: '**', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
