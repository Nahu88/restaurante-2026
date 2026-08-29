import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { logOutOutline } from 'ionicons/icons';

import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [CommonModule, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon],
})
export class HomePage implements OnInit {

  userEmail = '';
  cerrandoSesion = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {
    addIcons({ logOutOutline });
  }

  async ngOnInit() {
    const { data } = await this.authService.getSession();
    this.userEmail = data.session?.user?.email ?? '';
    this.cdr.detectChanges();
  }

  async cerrarSesion() {
    this.cerrandoSesion = true;

    try {
      await this.authService.logout();
      this.router.navigate(['/login']);
    } finally {
      this.cerrandoSesion = false;
      this.cdr.detectChanges();
    }
  }
}
