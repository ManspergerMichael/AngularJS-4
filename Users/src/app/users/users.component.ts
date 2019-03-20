import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: Array<any>;

  constructor(private _usersService : UsersService) 
  {
    this.users = _usersService.users;
  }

  ngOnInit() {
  }

}
