import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  visibility: boolean = false;

  invisibility: boolean = false;

  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  end: string = '';

  x = setInterval(()=>{
    var futureDate = new Date("Oct 11 2023 00:00:00").getTime();
    var today = new Date().getTime();
    var distance = futureDate - today;
    this.days = distance > 0 ? Math.floor(distance / 1000 / 60 / 60 / 24) : 0;
    this.hours = distance > 0 ? Math.floor(distance / 1000 / 60 / 60) % 24 : 0;
    this.minutes = distance > 0 ? Math.floor(distance / 1000 / 60) % 60 : 0;
    this.seconds = distance > 0 ? Math.floor(distance / 1000) % 60 : 0;

    if(distance < 0){
      clearInterval(this.x);
      this.invisibility = true;
      this.visibility = true;
      this.end = 'Любимая, сегодня наша годовщина!!!';
    }
  }, 1000)
}
