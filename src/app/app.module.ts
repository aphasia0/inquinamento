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
import {InputTextModule} from 'primeng/inputtext';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {GalleriaModule} from 'primeng/galleria';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContattiComponent
  ],
  imports: [

    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    AgGridModule.withComponents([]),
    ScullyLibModule,
    ButtonModule,
    ReactiveFormsModule,
    InputTextModule,
    MessageModule, GalleriaModule,
    MessagesModule
  ],
  providers: [InquinamentoService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
