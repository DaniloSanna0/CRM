import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FattureRoutingModule } from './fatture-routing.module';
import { FattureComponent } from './fatture.component';
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
import { Dialog2Component } from './dialog2/dialog2.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';




@NgModule({
  declarations: [
    FattureComponent,
    DialogComponent,
    Dialog2Component
  ],
  imports: [
    CommonModule,
    FattureRoutingModule,
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
MatCheckboxModule,
MatSelectModule,
MatDialogModule,
MatMenuModule
  ]
})
export class FattureModule { }
