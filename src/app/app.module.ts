import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './section/header/header.component';
import { FooterComponent } from './section/footer/footer.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSliderModule } from '@angular/material/slider';
import { AuthInterceptor } from './auth.interceptor';
import {MatIconModule} from '@angular/material/icon';
import { DialogComponent } from './section/footer/dialog/dialog.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTabsModule,
    MatMenuModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatSliderModule,
    MatIconModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
