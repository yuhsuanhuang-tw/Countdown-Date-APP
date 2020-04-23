import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    console.log("ngOnInit");
    this.route.paramMap.subscribe(params => {
      let eventId = params.get('id');
      console.log(eventId);

      //TODO get data from database
    })
  }

}
