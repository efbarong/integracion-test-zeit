import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  hola: any;

  async setHola() {
    this.http.get('https://jsonplaceholder.typicode.com/todos/1').subscribe(res => {
      this.hola = res;
    });
  }

  getHola() {
    return this.hola;
  }

  constructor(private http: HttpClient) {

  }
}
