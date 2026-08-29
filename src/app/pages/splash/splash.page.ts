import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
  standalone: true,
  imports: [CommonModule, IonContent]
})
export class SplashPage implements OnInit, OnDestroy {

  // TODO: reemplazar por los apellidos y nombres reales del grupo (4 integrantes)
  integrantes = [
    'Apellido 1, Nombre 1',
    'Apellido 2, Nombre 2',
    'Apellido 3, Nombre 3',
    'Apellido 4, Nombre 4'
  ];

  private timeoutId?: ReturnType<typeof setTimeout>;

  constructor(private router: Router) {}

  ngOnInit() {
    this.timeoutId = setTimeout(() => {
      this.router.navigate(['/splash-animada']);
    }, 1500);
  }

  ngOnDestroy() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }
}
