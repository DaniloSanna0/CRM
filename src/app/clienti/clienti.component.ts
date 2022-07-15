import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CreaCliente } from '../interface/crea-cliente';
import { ClientiService } from '../service/clienti.service';
import { DialogComponent } from './dialog/dialog.component';
import { Dialog2Component } from './dialog2/dialog2.component';

@Component({
  selector: 'app-clienti',
  templateUrl: './clienti.component.html',
  styleUrls: ['./clienti.component.scss']
})
export class ClientiComponent implements OnInit {
  displayedColumns: string[] = ['id', 'email', 'nome', 'cognome','PIva','pulsante'];
  clienti:CreaCliente[]=[]
  dataSource!: MatTableDataSource<CreaCliente>;
  // cliente!:CreaCliente

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor(private dialog: MatDialog, private c:ClientiService) { }

  openDialog(cliente:CreaCliente): void {
    console.log(cliente);

    this.dialog.open(DialogComponent ,{
      data: cliente,
      width: '500px'
    });
  }

  openDialog2(): void {
    console.log();
    this.dialog.open(Dialog2Component ,{
      width: '500px'
    });
  }

  visualizzaClienti(){
    this.c.getClienti().subscribe(res => {
      this.dataSource= new MatTableDataSource(res)
      this.clienti = res
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  ngOnInit(): void {

    this.c.clientiOBS.subscribe(res => this.visualizzaClienti())

    this.visualizzaClienti();
  }

  createCliente(cliente:CreaCliente){
    this.c.createCliente(cliente)
    .subscribe(res => this.clienti)
  }

  delte(id:number){
    this.c.deleteClienti(id)
    .subscribe(res => {
      this.clienti = this.clienti.filter(c => c.id != id)
      this.dataSource= new MatTableDataSource(this.clienti)
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