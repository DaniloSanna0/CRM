import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'utente', loadChildren: () => import('./utente/utente.module').then(m => m.UtenteModule) }, { path: 'registra', loadChildren: () => import('./registra/registra.module').then(m => m.RegistraModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
