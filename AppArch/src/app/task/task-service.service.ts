import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  tasks: Array<any> = [
    {id:1, title: 'SLASH', completed: false},
    {id:2, title: 'BURN', completed: false},
    {id:3, title: 'KILL', completed: false}
    
  ]
  retreveAll(){
    return this.tasks;
  }
  add(task: any){
    this.tasks.push(task);
  }
  remove(task: any){
    //find given task and remove from tasks
  }
  constructor() { 

  }
  ngOnInit(){
    
  }
}
