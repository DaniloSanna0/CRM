import { Component, OnInit, ViewChild } from '@angular/core';
import { AppuntamentiService } from '../service/appuntamenti.service';
import { CalendarOptions, FullCalendarComponent } from '@fullcalendar/angular'; // useful for typechecking
import timeGridPlugin from '@fullcalendar/timegrid';
import { Appuntamenti } from '../interface/appuntamenti';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';




@Component({
  selector: 'app-appuntamenti',
  templateUrl: './appuntamenti.component.html',
  styleUrls: ['./appuntamenti.component.scss']
})

export class AppuntamentiComponent implements OnInit {
  appuntamento!:Appuntamenti
  
  @ViewChild('calendar') calendarComponent!: FullCalendarComponent;

  constructor(private dialog: MatDialog, private a:AppuntamentiService) {}

  visualizzaAppuntamenti(){
    this.a.getAppuntamenti().subscribe(res => this.calendarOptions= {
      plugins: [ timeGridPlugin ],
      timeZone: 'UTC',
      initialView: 'dayGridMonth',
      selectable: true,
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,dayGridWeek,dayGridDay'
      },
      dateClick: ()=> {
        console.log('caio');
        this.handleDateClick.bind(this)
        this.openDialog(this.appuntamento)
      },
      select: info => {
        console.log(info);
        
        this.dialog.open(DialogComponent ,{
          data: info,
          width: '500px'
        })
        },
      events: res
    });

  }
  
  ngOnInit(): void {

    this.a.clientiOBS.subscribe(res => this.visualizzaAppuntamenti())

    this.visualizzaAppuntamenti()
   
  }
  
  calendarOptions!: CalendarOptions
  
  handleDateClick(arg: { dateStr: string; }) {
    alert('date click! ' + arg.dateStr)
  }

  openDialog(appuntamento: Appuntamenti): void {
    console.log(appuntamento);

    this.dialog.open(DialogComponent ,{
      data: appuntamento,
      width: '500px'
    });
  }
  openDialog2(): void {
    console.log();

    this.dialog.open(DialogComponent ,{
      width: '500px'
    });
  }

  
  
}
