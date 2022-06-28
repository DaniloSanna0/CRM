import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Utente } from '../utente';
import { UtentiService } from '../utenti.service';
import { DialogComponent } from './dialog/dialog.component';



@Component({
  selector: 'app-utente',
  templateUrl: './utente.component.html',
  styleUrls: ['./utente.component.scss']
})
export class UtenteComponent implements OnInit {
  displayedColumns: string[] = ['id', 'email', 'nome', 'cognome','pulsante'];

  constructor(private u:UtentiService, private dialog: MatDialog){}
  
  openDialog(): void {
      this.dialog.open(DialogComponent ,{
        data: this.users,
          width: '500px'
        });
    }
      
      users:Utente[]=[]
      
      visualizzaUtenti(){
        this.u.getUsers().subscribe(res => {this.users=res.reverse()})
      }
      ngOnInit(): void {
        this.visualizzaUtenti()
      }
  
}