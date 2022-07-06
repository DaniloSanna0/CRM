import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppuntamentiRoutingModule } from './appuntamenti-routing.module';
import { AppuntamentiComponent } from './appuntamenti.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppuntamentiComponent
  ],
  imports: [
    CommonModule,
    AppuntamentiRoutingModule,
    MatDatepickerModule,
    MatCardModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    HttpClientModule
  ]
})
export class AppuntamentiModule { }
