import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { CreaCliente } from 'src/app/interface/crea-cliente';
import { Utente } from 'src/app/interface/utente';
import { ClientiService } from 'src/app/service/clienti.service';
import { ClientiComponent } from '../clienti.component';

@Component({
  selector: 'app-dialog2',
  templateUrl: './dialog2.component.html',
  styleUrls: ['./dialog2.component.scss']
})
export class Dialog2Component implements OnInit {

  @Output() newItemEvent = new EventEmitter<string>();
  
  clienti:CreaCliente[] = []
  cliente:CreaCliente = new CreaCliente() 
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  dataSource!: MatTableDataSource<CreaCliente>;

  constructor(private c:ClientiService) {}

  ngOnInit(): void {
    // this.c.getClienti().subscribe(res => {
      // this.dataSource= new MatTableDataSource(res)
    //   this.clienti = res
    // })
  }

  createCliente(){
    
    this.c.clientiSBJ.next(true)

    // this.clienti.push(this.cliente)
    this.c.createCliente(this.cliente)
    .subscribe(res => this.clienti
      )
  }

}
