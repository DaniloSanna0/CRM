import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Utente } from '../interface/utente';
import { ClientiService } from '../service/clienti.service';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-clienti',
  templateUrl: './clienti.component.html',
  styleUrls: ['./clienti.component.scss']
})
export class ClientiComponent implements OnInit {
  displayedColumns: string[] = ['id', 'email', 'nome', 'cognome','pulsante'];
  clienti:Utente[]=[]
  cliente!:Utente
  dataSource!: MatTableDataSource<Utente>;


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  
  constructor(private dialog: MatDialog, private c:ClientiService) { }

  openDialog(user:Utente): void {
    console.log(user);

    this.dialog.open(DialogComponent ,{
      data: user,
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
    this.visualizzaClienti();
  }

  createCliente(cliente:Utente){
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
