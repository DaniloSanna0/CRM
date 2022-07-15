import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import { NavigationStart, Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  userLogged!:boolean;
  constructor(private log:LoginService, private route:Router) { }

  ngOnInit(): void {
    this.route.events.subscribe(res => {
      if(res instanceof NavigationStart){
        this.userLogged = this.log.isUserLoggedIn();
      }
    });
  }

  logout(){
    this.log.logout();
    this.route.navigate([''])
  }
}
