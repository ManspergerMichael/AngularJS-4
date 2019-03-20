import { Injectable } from '@angular/core';
import { User } from './user'
import { Http } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: Array<User> = [
    new User("Bojack"),
    new User("Diane"),
    new User("HollyHock")
  ];

  constructor(private _http: Http) 
  {
    console.log(_http);    
   }
}
