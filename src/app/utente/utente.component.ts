import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Utente } from '../interface/utente';
import { UtentiService } from '../service/utenti.service';
import { DialogComponent } from './dialog/dialog.component';


@Component({
  selector: 'app-utente',
  templateUrl: './utente.component.html',
  styleUrls: ['./utente.component.scss']
})
export class UtenteComponent implements OnInit {
  displayedColumns: string[] = ['id', 'email', 'nome', 'cognome','pulsante'];
  users:Utente[]=[]
  dataSource!: MatTableDataSource<Utente>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private u:UtentiService, private dialog: MatDialog){
  }
  
  openDialog(user:Utente): void {
    console.log(user);

    this.dialog.open(DialogComponent ,{
      data: user,
      width: '500px'
    });
  }

    visualizzaUtenti(){
      this.u.getUsers().subscribe(res => {
        this.dataSource= new MatTableDataSource(res)
        this.users = res
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      })

    }

    ngOnInit(): void {
      this.visualizzaUtenti();
    }
    
    delte(id:number){
      
      this.u.deleteUser(id)
      .subscribe(res => {
        this.users = this.users.filter(c => c.id != id)
        this.dataSource= new MatTableDataSource(this.users)
      })
    }


    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
  
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }

    // ngAfterViewInit() {
    //   console.log(this.paginator);
    //   console.log(this.dataSource);
      
    //   this.dataSource.paginator = this.paginator;
    //   this.dataSource.sort = this.sort;
    // }


  }