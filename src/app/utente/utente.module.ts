import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtenteRoutingModule } from './utente-routing.module';
import { UtenteComponent } from './utente.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';




@NgModule({
  declarations: [
    UtenteComponent
  ],
  imports: [
    CommonModule,
    UtenteRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatFormFieldModule
  ]
})
export class UtenteModule { }
