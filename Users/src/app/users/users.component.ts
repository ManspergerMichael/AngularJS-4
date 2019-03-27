//This is part of the controler
import { Component, OnInit } from '@angular/core';
//this inports the service that is connected to the user model user.ts
import { UsersService } from './users.service';

@Component({
  //This will display the users view in the tag <app-users></app-users> 
  selector: 'app-users',
  //the view for this component
  templateUrl: './users.component.html',
  //the css of the view
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  //the users array that will be passed to the view
  users: Array<any>;

  constructor(private _usersService : UsersService) 
  {
    //this gets the users array from the usersService.ts
    this.users = _usersService.users;
  }

  ngOnInit() {
  }

}
