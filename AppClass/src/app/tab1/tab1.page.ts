import { Component } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  users: any[] = [];


  constructor(private service : UserServiceService) {}

  ngOnInit(){
    this.service.getData().subscribe(
      (data) => { // Success
      this.users = data['results'];
      console.log(data);
      },
      (error) =>{
      console.error(error);
      }     
    )
  }

}
