import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { CreaCliente } from 'src/app/interface/crea-cliente';
import { Fattura } from 'src/app/interface/fattura';
import { FatturaClass } from 'src/app/interface/fattura-class';
import { Utente } from 'src/app/interface/utente';
import { ClientiService } from 'src/app/service/clienti.service';
import { FattureService } from 'src/app/service/fatture.service';

@Component({
  selector: 'app-dialog2',
  templateUrl: './dialog2.component.html',
  styleUrls: ['./dialog2.component.scss']
})
export class Dialog2Component implements OnInit {
  clienti:CreaCliente[] = []
  fatture:FatturaClass[] = []
  fattura:FatturaClass = new FatturaClass() 
  dataSource!: MatTableDataSource<FatturaClass>;
  isNew:boolean = true


  constructor(private f:FattureService, private c:ClientiService) { }

  ngOnInit(): void {
    this.c.getClienti().subscribe(res => this.clienti)
  }

  createCliente(){
    this.f.createFatture(this.fattura)
    .subscribe(res => this.fatture
      )
  }

}
