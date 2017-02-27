import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [ UsersService ]
})
export class UserComponent implements OnInit {
  users: User[]

  constructor(private usersService: UsersService) {
    this.usersService.getUsersFromJsonPlaceholder().subscribe( users => {
      this.users = users;
    });
  }

  ngOnInit() {
  }

}

interface User {
  id : number;
  name : string;
  username : string;
  email : string;
  address: address;
}

interface address {
  street : string;
  suite:  string;
  city:  string;
  zipcode :  string;
  geo : geo;
}

interface geo {
  lat : string;
  lng : string;
}
