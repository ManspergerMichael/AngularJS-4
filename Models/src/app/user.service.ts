import { Injectable } from '@angular/core';
import { User } from './user';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: Array<any> = [new User("Bojack"),new User("Diane")]

  constructor(private _http: Http) { }
}
