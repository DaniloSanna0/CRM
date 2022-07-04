import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Utente } from 'src/app/interface/utente';
import { ClientiService } from 'src/app/service/clienti.service';

@Component({
  selector: 'app-dialog2',
  templateUrl: './dialog2.component.html',
  styleUrls: ['./dialog2.component.scss']
})
export class Dialog2Component implements OnInit {

  clienti:Utente[] = []
  cliente!:Utente
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  dataSource!: MatTableDataSource<Utente>;
  isNew:boolean = true

  constructor(private c:ClientiService, public dialogRef:MatDialogRef<Dialog2Component>) { }

  ngOnInit(): void {
    // console.log(this.data);
    // this.cliente = this.data
    // this.c.getClienti().subscribe(res => {
    //   this.dataSource= new MatTableDataSource(res)
    //   this.clienti = res
    // })
  }

  createCliente(cliente:Utente){
    
    // this.clienti.push(cliente)

    this.c.createCliente(cliente)
    .subscribe(res => this.clienti)
  }

}
