import { Component, OnInit } from '@angular/core';

//New import
import { Event } from '../../entities/event';
import { DbService } from '../../services/db.service';
import { CountService } from '../../services/count.service';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.page.html',
  styleUrls: ['./countdown.page.scss'],
})
export class CountdownPage implements OnInit {

  events : Event[] = [];
  topEvent = {};

  constructor( private db: DbService ) { }

  ngOnInit() {
    console.log('CountdownPage Init');
    this.db.getDatabaseState().subscribe(ready => {
      if(ready) {
        this.db.fetchEvents().subscribe(items => {
          this.events = CountService.calculateCountByEventList(items);
          console.log(this.events.length);
        })

        this.db.getTopEvent().then(item => {
          this.topEvent = CountService.calculateCountByEvent(item);
          console.log(this.topEvent);
        })
      }
    });
  }

}
