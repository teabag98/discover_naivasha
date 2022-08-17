export class EventsModel {
  event_id: number;
  event_ref: String;
  event_name: String;
  event_profile_image: String;
  event_location_name: String;
  event_location_long: number;
  event_location_lat: number;
  event_organizedby_user: number;
  event_from_date: String;
  event_to_date: String;
  event_tickets_types: EventType[];
  event_details: String;
  event_layout_type: String;
  event_days: number;
  event_sponsored: boolean;
  event_sponsored_ref: String;
  event_media_data: [];
  event_active: boolean;
  eventTags: EventTags;
  offerItems: OfferItems[];
  event_description: String;
  constructor(
    event_id: number,
    event_ref: String,
    event_name: String,
    event_profile_image: String,
    event_location_name: String,
    event_location_long: number,
    event_location_lat: number,
    event_organizedby_user: number,
    event_from_date: String,
    event_to_date: String,
    event_tickets_types: EventType[],
    event_details: String,
    event_layout_type: String,
    event_days: number,
    event_sponsored: boolean,
    event_sponsored_ref: String,
    event_media_data: [],
    event_active: boolean,
    eventTags: EventTags,
    offerItems: OfferItems[],
    event_description: String
  ) {
    (this.event_id = event_id),
      (this.event_ref = event_ref),
      (this.event_name = event_name),
      (this.event_profile_image = event_profile_image),
      (this.event_location_name = event_location_name),
      (this.event_location_long = event_location_long),
      (this.event_location_lat = event_location_lat),
      (this.event_organizedby_user = event_organizedby_user),
      (this.event_from_date = event_from_date),
      (this.event_to_date = event_to_date),
      (this.event_details = event_details),
      (this.event_layout_type = event_layout_type),
      (this.event_days = event_days),
      (this.event_sponsored = event_sponsored),
      (this.event_sponsored_ref = event_sponsored_ref),
      (this.event_media_data = event_media_data),
      (this.event_active = event_active),
      (this.eventTags = eventTags),
      (this.offerItems = offerItems),
      (this.event_description = event_description),
      (this.event_tickets_types = event_tickets_types);
  }
}

// show types of packages within event
export class EventType {
  ticket_type_id: number;
  ticket_type_ref: String;
  ticket_type_name: String;
  ticket_type_create_date: String;
  ticket_type_available: boolean;
  ticket_price: number;
  ticket_grpd_type_id: number;
  ticket_details_ref: String;
  maximum_tickets: number;
  constructor(
    ticket_type_id: number,
    ticket_type_ref: String,
    ticket_type_name: String,
    ticket_type_create_date: String,
    ticket_type_available: boolean,
    ticket_price: number,
    ticket_grpd_type_id: number,
    ticket_details_ref: String,
    maximum_tickets: number
  ) {
    (this.ticket_type_id = ticket_type_id),
      (this.ticket_type_ref = ticket_type_ref),
      (this.ticket_type_name = ticket_type_name),
      (this.ticket_type_create_date = ticket_type_create_date),
      (this.ticket_type_available = ticket_type_available),
      (this.ticket_price = ticket_price),
      (this.ticket_grpd_type_id = ticket_grpd_type_id),
      (this.ticket_details_ref = ticket_details_ref),
      (this.maximum_tickets = maximum_tickets);
  }
}

//tags explaining an event
export class EventTags {
  tag_id: number;
  tag_ref: String;
  tag_name: String;
  tag_profile_url: String;
  tag_details_ref: String;
  tag_group_ref: String;
  tag_overlay_text: String;
  tag_active: boolean;
  constructor(
    tag_id: number,
    tag_ref: String,
    tag_name: String,
    tag_profile_url: String,
    tag_details_ref: String,
    tag_group_ref: String,
    tag_overlay_text: String,
    tag_active: boolean
  ) {
    (this.tag_id = tag_id),
      (this.tag_ref = tag_ref),
      (this.tag_name = tag_name),
      (this.tag_profile_url = tag_profile_url),
      (this.tag_details_ref = tag_details_ref),
      (this.tag_group_ref = tag_group_ref),
      (this.tag_overlay_text = tag_overlay_text),
      (this.tag_active = tag_active);
  }
}

//items  on offer i nevent

export class OfferItems {
  offer_item_id: number;
  offer_item_ref: String;
  offer_item_name: String;
  offer_item_grouped_type_ref: String;
  offer_item_details_details_ref: String;
  offer_item_image_url: String;
  offer_item_qty: number;
  constructor(
    offer_item_id: number,
    offer_item_ref: String,
    offer_item_name: String,
    offer_item_grouped_type_ref: String,
    offer_item_details_details_ref: String,
    offer_item_image_url: String,
    offer_item_qty: number
  ) {
    (this.offer_item_id = offer_item_id),
      (this.offer_item_ref = offer_item_ref),
      (this.offer_item_name = offer_item_name),
      (this.offer_item_grouped_type_ref = offer_item_grouped_type_ref),
      (this.offer_item_details_details_ref = offer_item_details_details_ref),
      (this.offer_item_image_url = offer_item_image_url),
      (this.offer_item_qty = offer_item_qty);
  }
}
