import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class eventService {

 

  constructor(private httpClient: HttpClient){};

  

  getEvents():Observable<any>{
     return this.httpClient.get(
    "https://discovernaivasha20220805115303.azurewebsites.net/api/Events/LoadAllEvents"
     );
  }
}