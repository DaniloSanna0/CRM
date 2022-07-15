import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { CreaCliente } from 'src/app/interface/crea-cliente';
import { Utente } from 'src/app/interface/utente';
import { ClientiService } from 'src/app/service/clienti.service';
import { UtentiService } from 'src/app/service/utenti.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  clienti:CreaCliente[] = []
  cliente!:CreaCliente
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  dataSource!: MatTableDataSource<CreaCliente>;
  isNew:boolean = true

  constructor(private c:ClientiService, public dialogRef:MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
    console.log(this.data);
    this.cliente = this.data
    this.c.getClienti().subscribe(res => {
      this.dataSource= new MatTableDataSource(res)
      this.clienti = res
    })
  }

  aggiornaCliente(cliente:CreaCliente){
    this.c.updateClienti(cliente)
    .subscribe((res:CreaCliente) => {
      console.log(res);
      let index = this.clienti.findIndex(cliente => cliente.id == res.id)
      this.clienti.splice(index,1,res)
      this.dataSource= new MatTableDataSource(this.clienti)
      
    // this.clienti.push(cliente)
    })
    }

}
