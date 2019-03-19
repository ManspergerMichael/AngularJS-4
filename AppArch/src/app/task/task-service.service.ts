import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  //this file will be used to connect to the API that will provide data to the component
  tasks: Array<any> = [
    {id:1, title: 'SLASH', completed: false},
    {id:2, title: 'BURN', completed: false},
    {id:3, title: 'KILL', completed: false}
    
  ]
  constructor(private _http: Http) { //
    console.log(_http);
  }
  getTasks(){
    //console.log(this._http);
  }

  retreveAll(){
    return this.tasks;
  }

  add(task: any){
    this.tasks.push(task);
  }

  remove(task: any){
    //find given task and remove from tasks
  }

  getNote(){
    //this._http.get('/notes').map((response: Response) => response.json())
  }

  ngOnInit(){
    
  }
}
