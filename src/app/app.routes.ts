import { Routes } from '@angular/router';
import { LandingComponent } from './modules/landing/landing.component';

export const routes: Routes = [
  { path: '', component: LandingComponent }, // Ruta por defecto que lleva a landing
  // Aquí puedes agregar más rutas en el futuro
  // { path: 'about', component: AboutComponent },
  // { path: 'contact', component: ContactComponent },
];
