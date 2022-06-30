import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { GuestGuard } from './guard/guest.guard';

const routes: Routes = [
  { path: 'utente', canActivate: [AuthGuard], loadChildren: () => import('./utente/utente.module').then(m => m.UtenteModule) }, 
  { path: 'registra', canActivate: [GuestGuard], loadChildren: () => import('./registra/registra.module').then(m => m.RegistraModule) }, 
  { path: 'clienti', canActivate: [AuthGuard], loadChildren: () => import('./clienti/clienti.module').then(m => m.ClientiModule) }, 
  { path: 'fatture', canActivate: [AuthGuard], loadChildren: () => import('./fatture/fatture.module').then(m => m.FattureModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
