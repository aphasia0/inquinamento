import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class InquinamentoService {
  constructor(private http: HttpClient) { }

  get(){
      return this.http.get('dataset/406867c6-ff96-4347-86af-c10e8967cc93/resource/ae1bb314-1931-4150-85ba-612178adbddb/download/qaria_reportariagiorno_2021-01-30.json');
  }
}

