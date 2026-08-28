import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonInput,
  IonButton
} from '@ionic/angular';

import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonInput,
    IonButton
  ]
})
export class LoginPage {

  email = '';
  password = '';
  mensaje = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

 async ingresar() {
  this.mensaje = '';

  const { data, error } = await this.authService.login(
    this.email,
    this.password
  );

  if (error) {
    this.mensaje = 'Correo o contraseña incorrectos';
    console.error(error);
    return;
  }

  console.log('Login correcto:', data);

  this.router.navigate(['/home']);
}
}