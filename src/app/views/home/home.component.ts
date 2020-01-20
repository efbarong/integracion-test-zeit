import { ChangeDetectionStrategy, Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  items = Array.from({length: 100}).map((_, i) => `Item #${i}`);
  titulo: any;
  descripcion: any;
  html: any;

  constructor(private router: Router, private sData: DataService) {
    const time = new Date();
    this.titulo = 'Edward Fabián Barón';
    this.descripcion = 'Página de pruebas de integración y despliegue.';
    this.html = `<br><b>${time}</b>`;
  }

  ngOnInit() {
  }

  next() {
    this.sData.setHola();
    setTimeout(() => {
      this.router.navigate(['menu']);
    }, 1000);
  }
}
