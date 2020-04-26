import { Injectable } from '@angular/core';

//New import
import {Event} from '../entities/event'
import { Platform } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  private database: SQLiteObject;
  private isDbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  eventList = new BehaviorSubject([]);

  constructor(
    private platform: Platform, 
    private sqlite: SQLite, 
    private httpClient: HttpClient,
    private sqlPorter: SQLitePorter
  ) {
      this.platform.ready().then(() => {
        this.sqlite.create({
          name: 'event.db',
          location: 'default'
        }).then((db: SQLiteObject) => {
          this.database = db;
          this.getMockData();
        });
      });
    }

  //Create Table and get Mock Data
  getMockData() {
    this.httpClient.get('assets/dump.sql', {responseType: 'text'}).subscribe( sql => {
      this.sqlPorter.importSqlToDb(this.database, sql).then(_ => {
        this.getEvents();
        this.isDbReady.next(true);
      })
      .catch(e => console.log(e))
    });
  }

  getDatabaseState() {
    return this.isDbReady.asObservable();
  }

  fetchEvents(): Observable<Event[]> {
    return this.eventList.asObservable();
  }

  //Get Event List
  getEvents() {
    return this.database.executeSql('SELECT * FROM event', []).then(data => {
      let events: Event[] = [];
      if(data.rows.length > 0) {
        for(var i=0; i<data.rows.length; i++) {
          events.push({
            id: data.rows.item(i).id,
            title: data.rows.item(i).title,
            note: data.rows.item(i).note,
            startDate: data.rows.item(i).startDate,
            eventEnd: data.rows.item(i).eventEnd,
            endDate: data.rows.item(i).endDate,
            top: data.rows.item(i).top,
            orders: data.rows.item(i).orders,
            counts: data.rows.item(i).counts
          });
        }
      }
      this.eventList.next(events);
    });
  }

  //Get Event by ID
  getEvent(id): Promise<Event> {
    return this.database.executeSql('SELECT * FROM event WHERE id = ?', [id]).then(data => {
      return {
        id: data.rows.item(0).id,
        title: data.rows.item(0).title,
        note: data.rows.item(0).note,
        startDate: data.rows.item(0).startDate,
        eventEnd: data.rows.item(0).eventEnd,
        endDate: data.rows.item(0).endDate,
        top: data.rows.item(0).top,
        orders: data.rows.item(0).orders,
        counts: data.rows.item(0).counts
      } 
    });
  }

  //Add Event
  //data = [title, note, startDate, eventEnd, endDate, top, orders, counts]
  addEvent(data) {
    return this.database.executeSql('INSERT INTO event (title, note, startDate, eventEnd, endDate, top, orders, counts) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', data).then(data => {
      this.getEvents();
    });
  }

  //Update Event
  updateEvent(id, data) {
    return this.database.executeSql(`UPDATE event SET title = ?, note = ?, startDate = ?, eventEnd = ?, endDate = ?, top = ?, orders = ?, counts = ? WHERE id = ${id}`, data).then(data => {
      this.getEvents();
    })
  }

  //Delete Event
  deleteEvent(id) {
    return this.database.executeSql('DELETE FROM event WHERE id = ?', [id]).then(_ => {
      this.getEvents();
    })
  }

  //Top Event
  getTopEvent(): Promise<Event> {
    let sql = `
    SELECT * 
    FROM event 
    WHERE top = 1;`;

    return this.database.executeSql(sql, []).then(data => {
      let event: Event;

      if (data.rows.length > 0) {
        console.log('top length > 0')
        event = {
          id: data.rows.item(0).id,
          title: data.rows.item(0).title,
          note: data.rows.item(0).note,
          startDate: data.rows.item(0).startDate,
          eventEnd: data.rows.item(0).eventEnd,
          endDate: data.rows.item(0).endDate,
          top: data.rows.item(0).top,
          orders: data.rows.item(0).orders,
          counts: data.rows.item(0).counts
        };
      }
      return event;
    });
  }

}
