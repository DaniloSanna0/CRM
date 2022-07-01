import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Utente } from '../interface/utente';

@Injectable({
  providedIn: 'root'
})
export class ClientiService {

  constructor(private http : HttpClient) { }

  ApiUrlC:string = 'http://localhost:4201/clienti'

  createCliente(cliente:Utente) {
    return this.http.post<Utente>(this.ApiUrlC, cliente)
  }

  getClienti(){
    return this.http.get<Utente[]>(this.ApiUrlC)
  }

  updateClienti(cliente:Utente){
    return this.http.patch<Utente>(this.ApiUrlC + '/' + cliente.id, cliente)
  }

  deleteClienti(id:number){
    return this.http.delete(this.ApiUrlC+'/'+id)
  }

}