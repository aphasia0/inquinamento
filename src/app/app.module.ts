import { InquinamentoService } from './inquinamento.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { InquinamentoComponent } from './inquinamento/inquinamento.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InquinamentoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    AgGridModule.withComponents([])
  ],
  providers: [InquinamentoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
