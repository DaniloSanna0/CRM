import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth } from './auth';
import { tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  ApiUrlUser:string = 'http://localhost:4201/login'
  tokenItemKey:string = 'jwt'
  userInfoKey:string = 'loggedUser'

  constructor(private http: HttpClient) { }
  
  saveUser(token:string){
    localStorage.setItem(this.tokenItemKey,token)
  }

  login(data:{email:string; password:string}) {
    return this.http.post<Auth>(this.ApiUrlUser+"login", data).pipe(
      tap((data)=>{
        localStorage.setItem(this.userInfoKey, JSON.stringify(data))
      }),
    )
  }

  logout() {
    localStorage.removeItem(this.tokenItemKey)
    localStorage.removeItem(this.userInfoKey)
  }

  isUserLoggedIn():boolean{
    return localStorage.getItem(this.tokenItemKey) != null
  }
}
