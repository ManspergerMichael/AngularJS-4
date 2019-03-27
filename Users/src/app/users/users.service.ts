//in a actual angular app this service would retreve data from the Node.js server api. 
import { Injectable } from '@angular/core';
import { User } from './user'
//This requires npn install @angular/http
import { Http } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  //data is stored here but a real app would include calls to a RESTful API
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
