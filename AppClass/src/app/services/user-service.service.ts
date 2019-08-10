import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  readonly service = "https://randomuser.me/api/?results=8";
  constructor(public http : HttpClient) { }

  getData(){
    return this.http.get('https://randomuser.me/api/?results=8');
  }

}
