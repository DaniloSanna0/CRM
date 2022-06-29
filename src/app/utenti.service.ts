import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './utente/dialog/user';

@Injectable({
  providedIn: 'root'
})
export class UtentiService {

  constructor(private http : HttpClient) { }

  ApiUrlUser:string = 'http://localhost:4201/users'

  getUsers(){
    return this.http.get<User[]>(this.ApiUrlUser)
  }

  // getUser(id:number){
  //   return this.http.get<Utente>(`${this.ApiUrlUser}/${id}`)
  // }

  updateUser(user:User){
    return this.http.patch<User>(this.ApiUrlUser + '/' + user.id, user)
  }

  deleteUser(id:number){
    return this.http.delete(this.ApiUrlUser+'/'+id)
  }
}
