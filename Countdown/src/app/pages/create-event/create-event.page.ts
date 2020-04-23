import { Component, OnInit } from '@angular/core';

//New import
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { FormGroup, FormBuilder } from '@angular/forms';

import { DbService } from '../../services/db.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.page.html',
  styleUrls: ['./create-event.page.scss'],
})
export class CreateEventPage implements OnInit {

  today = new Date();
  eventForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private db: DbService,
    public alertController: AlertController,
    public formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.eventForm = this.formBuilder.group({
      top: false,
      title: '',
      note: '',
      startDate: this.today.toISOString(),
      eventEnd: false,
      endDate: this.today.toISOString(),
      orders: 0,
      counts: 0
    })
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

  addEvent() {
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

    this.db.addEvent(data).then(_ => {
      this.router.navigateByUrl('/countdown');
    });

  }

}
