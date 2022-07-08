import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { CreaCliente } from 'src/app/interface/crea-cliente';
import { FatturaClass } from 'src/app/interface/fattura-class';
import { Prodotti } from 'src/app/interface/prodotti';
import { ClientiService } from 'src/app/service/clienti.service';
import { FattureService } from 'src/app/service/fatture.service';
import { ProdottiService } from 'src/app/service/prodotti.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  clienti:CreaCliente[] = []
  prodotti!:Prodotti[];
  prodSelezionati:number[] = [];
  fatture:FatturaClass[] = []
  fattura!:FatturaClass
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  dataSource!: MatTableDataSource<FatturaClass>;
  isNew:boolean = true
  
  constructor(private f:FattureService, public dialogRef:MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA) public data:any,
    private c:ClientiService,
    private p:ProdottiService) { }

  ngOnInit(): void {
    console.log(this.data);
    this.fattura = this.data
    this.f.getFatture().subscribe(res => {
      this.dataSource= new MatTableDataSource(res)
      this.fatture = res
    })

    this.c.getClienti().subscribe(res => this.clienti = res)
    this.p.getAll()
    .subscribe((res:Prodotti[]) => this.prodotti = res)
  }

  aggiornaCliente(fattura:FatturaClass){
    this.f.updateFatture(fattura)
    .subscribe((res:FatturaClass) => {
      console.log(res);
      let index = this.fatture.findIndex(fattura => fattura.id == res.id)
      this.fatture.splice(index,1,res)
      this.dataSource= new MatTableDataSource(this.fatture)
    })
    }

}
