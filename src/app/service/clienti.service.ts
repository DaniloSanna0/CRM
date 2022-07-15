import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CreaCliente } from '../interface/crea-cliente';
import { Utente } from '../interface/utente';

@Injectable({
  providedIn: 'root'
}) 
export class ClientiService {

  constructor(private http : HttpClient) { }

  ApiUrlC:string = 'http://localhost:4201/clienti'

  clientiSBJ = new BehaviorSubject<boolean | null>(null)

  clientiOBS = this.clientiSBJ.asObservable()

  createCliente(cliente:CreaCliente) {
    return this.http.post<CreaCliente>(this.ApiUrlC, cliente)
  }

  getClienti(){
    return this.http.get<CreaCliente[]>(this.ApiUrlC)
  }

  updateClienti(cliente:CreaCliente){
    return this.http.patch<CreaCliente>(this.ApiUrlC + '/' + cliente.id, cliente)
  }

  deleteClienti(id:number){
    return this.http.delete(this.ApiUrlC+'/'+id)
  }

}