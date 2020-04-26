import { Injectable } from '@angular/core';

//New import
import { Event } from '../entities/event';

@Injectable({
  providedIn: 'root'
})
export class CountService {

  constructor() { }

  //Calculate type 1: input date
  static calculateCount(startDate: string, eventEnd: number, endDate: string): number {
    let today = new Date();
    var days: number = 0;

    if (eventEnd == 1) {
      let sDate = new Date(startDate);
      let eDate = new Date(endDate);
      days = (eDate.valueOf() - sDate.valueOf()) / 86400000;
    } else {
      var sDate = new Date(startDate);
      var days = (today.valueOf() - sDate.valueOf()) / 86400000;
    }
    return Math.floor(days);
  }

  //Calculate type 2: input event
  static calculateCountByEvent(event: Event): Event {
    let today = new Date();
    var days: number = 0;

    if (event.eventEnd == 1) {
      let sDate = new Date(event.startDate);
      let eDate = new Date(event.endDate);
      days = (eDate.valueOf() - sDate.valueOf()) / 86400000;
    } else {
      var sDate = new Date(event.startDate);
      var days = (today.valueOf() - sDate.valueOf()) / 86400000;
    }
    event.counts = Math.floor(days);
    return event;
  }

  //Calculate type 3: input event list
  static calculateCountByEventList(events: Event[]): Event[] {
    let today = new Date();
    var days: number = 0;

    for(var event of events) {
      if (event.eventEnd == 1) {
        let sDate = new Date(event.startDate);
        let eDate = new Date(event.endDate);
        days = (eDate.valueOf() - sDate.valueOf()) / 86400000;
      } else {
        var sDate = new Date(event.startDate);
        var days = (today.valueOf() - sDate.valueOf()) / 86400000;
      }
      event.counts = Math.floor(days);
    }
    return events;
  }
  
}
