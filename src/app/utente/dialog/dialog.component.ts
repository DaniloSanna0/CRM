import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Utente } from 'src/app/interface/utente';
import { UtentiService } from 'src/app/service/utenti.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  
  users:Utente[] = []
  user!:Utente
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  dataSource!: MatTableDataSource<Utente>;
  isNew:boolean = true


  constructor(private u:UtentiService, public dialogRef:MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA) public data:any) {}
  ngOnInit(): void {
    console.log(this.data);
    this.user = this.data
    this.u.getUsers().subscribe(res => {
      this.dataSource= new MatTableDataSource(res)
      this.users = res
      
    })
  }
  
  
 
  aggiornaUtente(user:Utente){
    this.u.updateUser(user)
    .subscribe((res:Utente) => {
      console.log(res);
      let index = this.users.findIndex(user => user.id == res.id)
      this.users.splice(index,1,res)
      this.dataSource= new MatTableDataSource(this.users)

    })
  }
}