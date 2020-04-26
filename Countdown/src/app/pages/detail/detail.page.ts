import { Component, OnInit } from '@angular/core';

//New import
import { Event } from '../../entities/event';
import { ActivatedRoute, Router } from '@angular/router';
import { DbService } from '../../services/db.service';
import { CountService } from '../../services/count.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  event: Event;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private db: DbService,
  ) { }

  ngOnInit() {
    console.log('DetailPage Init');
    this.route.paramMap.subscribe(params => {
      let id = params.get('id');
      console.log(id);

      this.db.getEvent(id).then(data => {
        this.event = CountService.calculateCountByEvent(data);
      })
    })
  }

}
