import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FatturaClass } from '../interface/fattura-class';

@Injectable({
  providedIn: 'root'
})
export class FattureService {

  constructor(private http : HttpClient) { }

  ApiUrlC:string = 'http://localhost:4201/fatture'

  createFatture(fattura:FatturaClass) {
    return this.http.post<FatturaClass>(this.ApiUrlC, fattura)
  }

  getFatture(){
    return this.http.get<FatturaClass[]>(this.ApiUrlC)
  }

  updateFatture(fattura:FatturaClass){
    return this.http.patch<FatturaClass>(this.ApiUrlC + '/' + fattura.id, fattura)
  }

  deleteFatture(id:number){
    return this.http.delete(this.ApiUrlC+'/'+id)
  }
}
