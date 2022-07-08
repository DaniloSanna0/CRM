import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DialogComponent } from './dialog/dialog.component';
import { Dialog2Component } from './dialog2/dialog2.component';
import { MatDialog } from '@angular/material/dialog';
import { FattureService } from '../service/fatture.service';
import { FatturaClass } from '../interface/fattura-class';
import { ClientiService } from '../service/clienti.service';
import { CreaCliente } from '../interface/crea-cliente';


@Component({
  selector: 'app-fatture',
  templateUrl: './fatture.component.html',
  styleUrls: ['./fatture.component.scss']
})
export class FattureComponent implements OnInit {
  clienti:CreaCliente[] = []
  displayedColumns: string[] = ['id', 'cliente', 'numeroFattura', 'prodotti', 'scadenza', 'data', 'pagata', 'pulsante', ];
  fatture:FatturaClass[]=[]
  dataSource!: MatTableDataSource<FatturaClass>;
  fattura!:FatturaClass
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor(private dialog: MatDialog,
              private f:FattureService,
              private c:ClientiService) { }
  
  openDialog(fattura:FatturaClass): void {
    console.log(fattura);

    this.dialog.open(DialogComponent ,{
      data: fattura,
      width: '470px'
    });
  }
  openDialog2(): void {
    console.log();
    this.dialog.open(Dialog2Component ,{
      width: '470px'
    });
  }

  visualizzaClienti(){
    this.f.getFatture().subscribe(res => {
      this.dataSource= new MatTableDataSource(res)
      this.fatture = res
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  ngOnInit(): void {
    this.visualizzaClienti();
    this.c.getClienti().subscribe(res => this.clienti = res)
  }

  createCliente(fattura:FatturaClass){
    this.f.createFatture(fattura)
    .subscribe(res => this.fatture)
  }

  delte(id:number){
    this.f.deleteFatture(id)
    .subscribe(res => {
      this.fatture = this.fatture.filter(c => c.id != id)
      this.dataSource= new MatTableDataSource(this.fatture)
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
