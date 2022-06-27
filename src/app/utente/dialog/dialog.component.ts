import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Utente } from 'src/app/utente';
import { UtentiService } from 'src/app/utenti.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  // idUtente!: number;
  // idUpdate!: number;
  form!:FormGroup;
  updateUser!: Utente;
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  constructor(@Inject(MAT_DIALOG_DATA) public data:any, private u:UtentiService, ) {}
  ngOnInit(): void {
  }

  // visualizzaUtente(id:number){
    
  //   this.idUtente = id
  //   this.u.getUser(this.idUpdate).subscribe(res=> console.log(res))
  // }
  
  loading= false
  aggiornaPost(){
    this.loading=true
    this.u.updateUser(this.form.value, this.updateUser!.id).subscribe((res:Utente)=>{this.loading=false;
    })
}
}