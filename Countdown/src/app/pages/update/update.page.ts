import { Component, OnInit } from '@angular/core';

//New import
import { Event } from '../../entities/event';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DbService } from '../../services/db.service';
import { CountService } from '../../services/count.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {

  today = new Date();
  event: Event;
  eventForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private db: DbService,
    public alertController: AlertController,
    public formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    console.log('UpdatePage Init');
    this.route.paramMap.subscribe(params => {
      let id = params.get('id');
      console.log(id);

      this.db.getEvent(id).then(data => {
        this.event = CountService.calculateCountByEvent(data);

        let top = this.event.top == 0 ? false : true;
        let eventEnd = this.event.eventEnd == 0 ? false : true;
        let endDate = this.event.eventEnd == 0 ? new Date().toISOString() : this.event.eventEnd;
        console.log(top, eventEnd, endDate);

        this.eventForm = this.formBuilder.group({
          top: top,
          title: this.event.title,
          note: this.event.note,
          startDate: this.event.startDate,
          eventEnd: eventEnd,
          endDate: endDate,
          orders: this.event.orders,
          counts: this.event.counts
        })
        
      })
    })
  }

  updateEvent() {
    console.log("Title", this.eventForm.value.title);
    if(this.eventForm.value.title == '') {
      this.titleUndefined();
      return;
    }

    let top = this.eventForm.value.top == true ? 1 : 0;
    console.log(`Top: ${top}`);
    let eventEnd = this.eventForm.value.eventEnd == true ? 1 : 0;
    var endDate = this.eventForm.value.eventEnd == true ? this.eventForm.value.endDate : '';
    console.log(`EventEnd: ${eventEnd}`);
    console.log(`EndDate: ${endDate}`);

    let data = [
      this.eventForm.value.title, 
      this.eventForm.value.note,
      this.eventForm.value.startDate,
      eventEnd,
      endDate,
      top,
      this.eventForm.value.orders,
      this.eventForm.value.counts
    ];

    console.log(data);

    this.db.updateEvent(this.event.id, data).then(_ => {
      this.router.navigateByUrl('/countdown');
    });
  }

  async titleUndefined() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Title Error',
      message: 'Must input <strong>TITLE</strong>.',
      buttons: ['OK']
    });
    await alert.present();
  }

}
