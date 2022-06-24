import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private log:LoginService, private route:Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.log.logout();
    this.route.navigate(['/registra'])
  }
}
