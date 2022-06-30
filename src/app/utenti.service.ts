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

  // getUser(id:number){
  //   return this.http.get<Utente>(`${this.ApiUrlUser}/${id}`)
  // }

  updateUser(user:Utente){
    return this.http.patch<Utente>(this.ApiUrlUser + '/' + user.id, user)
  }

  deleteUser(id:number){
    return this.http.delete(this.ApiUrlUser+'/'+id)
  }
}
