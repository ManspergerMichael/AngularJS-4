import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Models';
  users: Array<any>;
  constructor(private _userService: UserService)
  {
    //this.users = _userService.users;
  }
  ngOnInit(){
    console.log(this.users);
  }
}
