import { ChangeDetectorRef, Component } from '@angular/core';
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
  IonButton,
  IonNote,
  IonChip,
  IonLabel
} from '@ionic/angular';

import { AuthService } from '../../core/services/auth.service';

interface PerfilRapido {
  etiqueta: string;
  email: string;
  password: string;
}

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
    IonButton,
    IonNote,
    IonChip,
    IonLabel
  ]
})
export class LoginPage {

  email = '';
  password = '';
  mensaje = '';
  cargando = false;

  // TODO: por ahora las 7 etiquetas apuntan al único usuario de prueba que
  // existe en Supabase. Cuando crees un usuario real por cada perfil,
  // reemplazá el email/password de cada entrada por el suyo.
  perfilesRapidos: PerfilRapido[] = [
    { etiqueta: 'Dueño', email: 'prueba123@gmail.com', password: '123456789' },
    { etiqueta: 'Supervisor', email: 'prueba123@gmail.com', password: '123456789' },
    { etiqueta: 'Metre', email: 'prueba123@gmail.com', password: '123456789' },
    { etiqueta: 'Mozo', email: 'prueba123@gmail.com', password: '123456789' },
    { etiqueta: 'Cocinero', email: 'prueba123@gmail.com', password: '123456789' },
    { etiqueta: 'Cantinero', email: 'prueba123@gmail.com', password: '123456789' },
    { etiqueta: 'Cliente', email: 'prueba123@gmail.com', password: '123456789' }
  ];

  constructor(
    private authService: AuthService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  async ingresar() {
    this.mensaje = '';
    this.cargando = true;

    try {
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
    } catch (err) {
      this.mensaje = 'Correo o contraseña incorrectos';
      console.error(err);
    } finally {
      this.cargando = false;
      // Esta app corre sin Zone.js (Angular zoneless): al retomar después
      // de un await, Angular no vuelve a chequear la vista solo. Hay que
      // pedirlo explícitamente o la UI queda "trabada" con el estado viejo.
      this.cdr.detectChanges();
    }
  }

  ingresoRapido(perfil: PerfilRapido) {
    this.email = perfil.email;
    this.password = perfil.password;
    this.ingresar();
  }
}
