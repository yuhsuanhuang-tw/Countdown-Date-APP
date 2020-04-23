import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.page.html',
  styleUrls: ['./countdown.page.scss'],
})
export class CountdownPage implements OnInit {

  // Here are const Data for Test
    events =  [
    { id: 1, title: "Winnie born", note: "", startDate:"1993-03-31T23:59:59.999Z", eventEnd: 0, endDate: "", counts: 0 },
    { id: 2, title: "Sean born", note: "", startDate:"1992-09-30T23:59:59.999Z", eventEnd: 0, endDate: "", counts: 0 },
    { id: 3, title: "Work in Taiwan", note: "Mirle Corporation", startDate:"2016-11-01T23:59:59.999Z", eventEnd: 0, endDate: "2018-03-31T23:59:59.999Z", counts: 0 },
    { id: 4, title: "Work in Sydney", note: "水井坊", startDate:"2018-06-08T23:59:59.999Z", eventEnd: 0, endDate: "2018-11-01T23:59:59.999Z", counts: 0 },
    { id: 5, title: "Australi Life", note: "australi working & holiday", startDate:"2018-05-03T23:59:59.999Z", eventEnd: 0, endDate: "2019-01-03T23:59:59.999Z", counts: 0 },
    { id: 6, title: "Canada Life", note: "canada working & holiday", startDate:"2019-04-21T23:59:59.999Z", eventEnd: 0, endDate: "", counts: 0 },
    { id: 7, title: "Travel to Bali", note: "", startDate:"2019-01-04T23:59:59.999Z", eventEnd: 0, endDate: "2019-01-09T23:59:59.999Z", counts: 0 },
    { id: 8, title: "Travel to NZ", note: "", startDate:"2018-11-21T23:59:59.999Z", eventEnd: 0, endDate: "2018-11-30T23:59:59.999Z", counts: 0 },
    { id: 9, title: "Together", note: "", startDate:"2011-11-25T23:59:59.999Z", eventEnd: 0, endDate: "", counts: 0 },
    { id: 10, title: "Buy Iphone", note: "Buy IPhone SE in Taiwan", startDate:"2016-08-15T23:59:59.999Z", eventEnd: 1, endDate: "2016-08-16T23:59:59.999Z", counts: 9999 }
  ];
  topCountdown = { id: 10, title: "Buy Iphone", note: "Buy IPhone SE in Taiwan. test note beyond the area and see what's happen!", startDate:"2016-08-15T23:59:59.999Z", eventEnd: 1, endDate: "2016-08-16T23:59:59.999Z", counts: 9999 };
  

  constructor() { }

  ngOnInit() {
  }

}
