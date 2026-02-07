import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./accueil/accueil').then((m) => m.Accueil),
  },
  {
    path: 'notes',
    loadComponent: () => import('./notes/notes').then((m) => m.Notes),
  },
  {
    path: 'templates',
    loadComponent: () => import('./templates/templates').then((m) => m.Templates),
  },
  {
    path: 'about-us',
    loadComponent: () => import('./about-us/about-us').then((m) => m.AboutUs),
  },
  {
    path: 'contact',
    loadComponent: () => import('./contact/contact').then((m) => m.Contact),
  }
];
