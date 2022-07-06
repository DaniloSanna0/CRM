import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppuntamentiService {

  constructor(private http : HttpClient) { }

  ApiUrlA:string = 'http://localhost:4201/appuntamenti'

  getAppuntamenti(){
    return this.http.get<Date | null>(this.ApiUrlA)
  }

  createAppuntamenti(appuntamenti:Date | null) {
    return this.http.post<Date | null>(this.ApiUrlA, appuntamenti)
  }
}
