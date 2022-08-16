import { Component, OnInit } from '@angular/core';
import { eventService } from './events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css', './events.component.scss'],
})
export class EventsComponent implements OnInit {
  constructor(private _eventService: eventService) {}

  ngOnInit() {
    this._eventService.getEvents().subscribe();
  }
}
