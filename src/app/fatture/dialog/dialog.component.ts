import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { FatturaClass } from 'src/app/interface/fattura-class';
import { FattureService } from 'src/app/service/fatture.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  fatture:FatturaClass[] = []
  fattura!:FatturaClass
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  dataSource!: MatTableDataSource<FatturaClass>;
  isNew:boolean = true
  
  constructor(private f:FattureService, public dialogRef:MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
    console.log(this.data);
    this.fattura = this.data
    this.f.getFatture().subscribe(res => {
      this.dataSource= new MatTableDataSource(res)
      this.fatture = res
    })
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
