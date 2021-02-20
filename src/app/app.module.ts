import {InquinamentoService} from './inquinamento.service';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {AgGridModule} from 'ag-grid-angular';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {ScullyLibModule} from '@scullyio/ng-lib';
import {ButtonModule} from 'primeng/button';
import {ContattiComponent} from './contatti/contatti.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContattiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    AgGridModule.withComponents([]),
    ScullyLibModule,
    ButtonModule,
    ReactiveFormsModule
  ],
  providers: [InquinamentoService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
