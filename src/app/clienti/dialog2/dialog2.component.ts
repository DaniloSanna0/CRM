import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { CreaCliente } from 'src/app/interface/crea-cliente';
import { Utente } from 'src/app/interface/utente';
import { ClientiService } from 'src/app/service/clienti.service';

@Component({
  selector: 'app-dialog2',
  templateUrl: './dialog2.component.html',
  styleUrls: ['./dialog2.component.scss']
})
export class Dialog2Component implements OnInit {

  clienti:CreaCliente[] = []
  cliente:CreaCliente = new CreaCliente() 
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  dataSource!: MatTableDataSource<CreaCliente>;
  isNew:boolean = true

  constructor(private c:ClientiService) {}

  ngOnInit(): void {
    // console.log(this.data);
    // this.cliente = this.data
    // this.c.getClienti().subscribe(res => {
    //   this.dataSource= new MatTableDataSource(res)
    //   this.clienti = res
    // })
  }

  createCliente(){
    
    // this.clienti.push(res)

    this.c.createCliente(this.cliente)
    .subscribe(res => this.clienti
      )
  }

}
