import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientiRoutingModule } from './clienti-routing.module';
import { ClientiComponent } from './clienti.component';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSortModule} from '@angular/material/sort';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogComponent } from './dialog/dialog.component';


@NgModule({
  declarations: [
    ClientiComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    ClientiRoutingModule,
    MatTableModule,
MatIconModule,
MatPaginatorModule,
MatFormFieldModule,
MatInputModule,
MatSortModule,
MatButtonModule,
HttpClientModule,
FormsModule,
ReactiveFormsModule,
  ]
})
export class ClientiModule { }
