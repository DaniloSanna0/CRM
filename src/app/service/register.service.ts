import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Utente } from '../interface/utente';
import { tap } from 'rxjs/operators';
import { Auth } from '../interface/auth';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  
  URL:string = 'http://localhost:4201/registra'

  constructor(private http:HttpClient) { }

  NewUser(us:Utente){
    return this.http.post<Auth>(this.URL + "register", us).pipe(
      tap((data)=>{
        // console.log("Signup", data);
        localStorage.setItem("user", JSON.stringify(data));
      })
    )
  }
}
