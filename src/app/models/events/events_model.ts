export class EventsModel {
  eventId: number;
  eventRef: String;
  eventProfileImage: String;
  eventLocationName: String;
  eventLocationLongitude: number;
  eventLocationLatitude: number;
  eventOrganizedByUserId: number;
  eventFromDate: String;
  eventToDate: String;

  constructor(
    eventId: number,
    eventRef: String,
    eventProfileImage: String,
    eventLocationName: String,
    eventLocationLongitude: number,
    eventLocationLatitude: number,
    eventOrganizedByUserId: number,
    eventFromDate: String,
    eventToDate: String
  ) {
    (this.eventId = eventId),
      (this.eventRef = eventRef),
      (this.eventProfileImage = eventProfileImage),
      (this.eventLocationName = eventLocationName),
      (this.eventLocationLongitude = eventLocationLongitude),
      (this.eventLocationLatitude = eventLocationLatitude),
      (this.eventOrganizedByUserId = eventOrganizedByUserId),
      (this.eventFromDate = eventFromDate),
      (this.eventToDate = eventToDate);
  }
}
