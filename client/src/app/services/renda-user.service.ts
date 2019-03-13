import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Response } from '../models/Response';
import { Request } from '../models/Request';

@Injectable({
  providedIn: 'root'
})
export class RendaUserService {

  API_URI = "http://localhost:3000/api"

  constructor( private https: HttpClient ) { }

  sendData( requestData: Request ) {
      return this.https.post( this.API_URI , requestData );
  }

}
