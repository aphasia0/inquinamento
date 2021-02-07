import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class InquinamentoService {
  constructor(private http: HttpClient) { }

  get(){
      return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}

