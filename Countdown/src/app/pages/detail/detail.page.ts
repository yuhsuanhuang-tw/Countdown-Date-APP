import { Component, OnInit } from '@angular/core';

import { Event } from '../../entities/event';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  // data for test
  countdownEvent: Event = { id: 1, title: "Winnie born", note: "This is a not which describe this event. And try to beyond this area", startDate:"1993-03-31T19:34:50.133-05:00", eventEnd: 1, endDate: "1993-04-20T19:34:50.133-05:00", top: 0, order: 0, count: 50 };

  constructor() { }

  ngOnInit() {
  }

}
