import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  titulo: any;
  descripcion: any;
  html: any;

  constructor() {
    const time = new Date();
    this.titulo = 'Eduard Fabián';
    this.descripcion = 'Página de pruebas de integración y despliegue.';
    this.html = `<br><b>${time}</b>`;
  }

  ngOnInit() {
  }

}
