import { Component, OnInit } from '@angular/core';
import { eventService } from './events.service';
import { EventsModel } from './events_model';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css', './events.component.scss'],
})
export class EventsComponent implements OnInit {
  constructor(private _eventService: eventService) {}

  allEvents: EventsModel[] = [];

  ngOnInit() {
    this._eventService.getEvents().subscribe((data) => {
      this.allEvents = data['events'];
    });
  }
}
