import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.page.html',
  styleUrls: ['./create-event.page.scss'],
})
export class CreateEventPage implements OnInit {

  today = new Date();

  endEvent: boolean = false;

  event = {
    top: false,
    startDate: this.today.toISOString(),
    endDate: this.today.toISOString(),
    eventEnd: false
  };

  constructor() { }

  ngOnInit() {
  }

}
