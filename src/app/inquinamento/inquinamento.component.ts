import { Component, OnInit } from '@angular/core';
import {InquinamentoService} from '../inquinamento.service';

@Component({
  selector: 'app-inquinamento',
  templateUrl: './inquinamento.component.html',
  styleUrls: ['./inquinamento.component.scss']
})
export class InquinamentoComponent implements OnInit {

  title = 'test';
  result$ ;
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
  ngOnInit(): void {
  }


  constructor(private http: InquinamentoService) {
    this.result$ = http.get();
  }


}
