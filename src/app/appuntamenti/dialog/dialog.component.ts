import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EventSourceInput } from '@fullcalendar/angular';
import { Appuntamenti } from 'src/app/interface/appuntamenti';
import { AppuntamentiService } from 'src/app/service/appuntamenti.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  appuntamento!:any

  constructor(private a:AppuntamentiService, public dialogRef:MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
    console.log(this.data);
    this.appuntamento = {
      title:'',
      start: this.data.startStr,
      end: this.data.endStr
    }
  }
  
  createAppuntamento(){
    this.a.createAppuntamenti(this.appuntamento).subscribe(res => console.log(res)
    )
  }

}
