import { InquinamentoService } from './inquinamento.service';
import { Component } from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test';
  result$ :any;

  constructor(private http: InquinamentoService) {

  }

  columnDefs = [
    { field: 'make' },
    { field: 'model' },
    { field: 'price'}
];

rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
];

  alert(cioao: string) {
    this.result$ = this.http.get();
  }
}
