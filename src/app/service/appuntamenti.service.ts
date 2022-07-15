import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EventSourceInput } from '@fullcalendar/angular';
import { Appuntamenti } from '../interface/appuntamenti';

@Injectable({
  providedIn: 'root'
})
export class AppuntamentiService {

  constructor(private http : HttpClient) { }

  ApiUrlA:string = 'http://localhost:4201/appuntamenti'

  getAppuntamenti(){
    return this.http.get<EventSourceInput | undefined>(this.ApiUrlA)
  }

  createAppuntamenti(appuntamenti:Appuntamenti) {
    return this.http.post<Appuntamenti>(this.ApiUrlA, appuntamenti)
  }
}
