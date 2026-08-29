import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full',
  },
  {
    path: 'splash',
    loadComponent: () =>
      import('../pages/splash/splash.page').then((m) => m.SplashPage),
  },
  {
    path: 'splash-animada',
    loadComponent: () =>
      import('../pages/splash-animada/splash-animada.page').then(
        (m) => m.SplashAnimadaPage
      ),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('../pages/login/login.page').then((m) => m.LoginPage),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('../pages/home/home.page').then((m) => m.HomePage),
  },
];