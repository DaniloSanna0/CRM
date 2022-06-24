import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth } from './auth';
import { tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  ApiUrlUser:string = 'http://localhost:4201/login'

  constructor(private http: HttpClient) { }
  
    saveUser(t:string){
      localStorage.setItem("token", t)
    }

  login(data:{email:string; password:string}) {
    return this.http.post<Auth>(this.ApiUrlUser+"login", data).pipe(
      tap((data)=>{
        localStorage.setItem("user", JSON.stringify(data))
      }),
    )
  }
  logout() {
    localStorage.removeItem("user")
  }


}
