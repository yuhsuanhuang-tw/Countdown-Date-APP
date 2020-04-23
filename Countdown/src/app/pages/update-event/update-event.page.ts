import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.page.html',
  styleUrls: ['./update-event.page.scss'],
})
export class UpdateEventPage implements OnInit {

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
