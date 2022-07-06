import { Component, OnInit } from '@angular/core';
import { Appuntamenti } from '../interface/appuntamenti';
import { AppuntamentiService } from '../service/appuntamenti.service';

@Component({
  selector: 'app-appuntamenti',
  templateUrl: './appuntamenti.component.html',
  styleUrls: ['./appuntamenti.component.scss']
})
export class AppuntamentiComponent implements OnInit {
  selected!: Date | null;
  appuntamenti:any[]=[]
  appuntamento:any = new Appuntamenti()

  // myFilter = (d: Date | null): boolean => {
  //   const day = (d || new Date()).getDay();
  //   // Prevent Saturday and Sunday from being selected.
  //   return day !== 0 && day !== 6;
  // };

  constructor(private a:AppuntamentiService) { }

  creaAppuntamento(){
    this.a.createAppuntamenti(this.selected).subscribe(res => this.appuntamenti)
  }

  ngOnInit(): void {
    this.a.getAppuntamenti().subscribe(res => this.appuntamenti)
  }

}
