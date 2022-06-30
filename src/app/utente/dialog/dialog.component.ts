import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Utente } from 'src/app/utente';
import { UtentiService } from 'src/app/utenti.service';
import { User } from './user';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  users:User[] = []
  user:User = new User();
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  dataSource!: MatTableDataSource<User>;
  isNew:boolean = true


  constructor(private u:UtentiService) {}
  ngOnInit(): void {
    this.u.getUsers().subscribe(res => {
      this.dataSource= new MatTableDataSource(res)
      this.users = res
      console.log(this.users);
      
    })
  }
  
  
 
  aggiornaUtente(){
    this.u.updateUser(this.user)
    .subscribe((res:User) => {
      console.log(res);
      let index = this.users.findIndex(user => user.id == res.id)
      this.users.splice(index,1,res)
      this.dataSource= new MatTableDataSource(this.users)

    })
    }
  
}
