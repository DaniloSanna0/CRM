import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Utente } from './utente';

@Injectable({
  providedIn: 'root'
})
export class UtentiService {

  constructor(private http : HttpClient) { }

  ApiUrlUser:string = 'http://localhost:4201/users'

  getUsers(){
    return this.http.get<Utente[]>(this.ApiUrlUser)
  }

  getUser(id:number){
    return this.http.get<Utente>(`${this.ApiUrlUser}/${id}`)
  }
}
