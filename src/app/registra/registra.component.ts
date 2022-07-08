import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ClassePrincipale } from '../interface/classe-principale';
import { LoginService } from '../service/login.service';
import { RegisterService } from '../service/register.service';
import { Utente } from '../interface/utente';
import { Router } from '@angular/router';




@Component({
  selector: 'app-registra',
  templateUrl: './registra.component.html',
  styleUrls: ['./registra.component.scss']
})

export class RegistraComponent implements OnInit {
  users:Utente[] = []
  form!:FormGroup;
  
    emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  
  constructor(private userS: RegisterService, private forms:FormBuilder, private srv: LoginService, private router:Router) { }

  authUser:any = {
    email: '',
    password: ''
  }

  accedi:boolean=true

  ngOnInit(): void {
    this.form = this.forms.group({
      email:[null, [Validators.required, Validators.email]],
      password:[null, [Validators.required]],
      nome:[null, [Validators.required]],
      cognome:[null, [Validators.required]]
  })
}
  
  NuovoUtente(){

    // let nuovo:Utente = {
    //   email: '',
    //   nome: '',
    //   password: '',
    //   cognome: ''
    // }
    let nuovo = new ClassePrincipale(this.form.value.id, this.form.value.email, this.form.value.password, this.form.value.nome, this.form.value.cognome)


    this.users.push(nuovo)

    this.userS.NewUser(nuovo).subscribe((res: any)=>{console.log(res)});
  }



  login(){
      this.srv.login(this.authUser).subscribe((res:any)=>{console.log(res);
        this.srv.saveUser(res.accessToken); 
        this.seiLoggato()
        if (res.accessToken) {
          this.router.navigate(['/utente'])
        }
      })
  }

  seiLoggato(){
    if(localStorage.getItem("token") != null){this.accedi=false}
}
}
