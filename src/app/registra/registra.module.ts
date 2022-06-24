import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistraRoutingModule } from './registra-routing.module';
import { RegistraComponent } from './registra.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';




@NgModule({
  declarations: [
    RegistraComponent
  ],
  imports: [
    CommonModule,
    RegistraRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule
  ]
})
export class RegistraModule { }
