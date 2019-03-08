import { Component, OnInit } from '@angular/core';
import { TaskServiceComponent } from '../task-service/task-service.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  //this array of objects is what will be passed back and forth
  tasks: any[] = []; 
  constructor(private _taskService: TaskServiceComponent) {
    
   }
   getTasks(){
     this._taskService.getTasks()
     .toPromise()
     .then(tasks => this.tasks = tasks)
     .catch(err =>err)
   }
   updateTasks(){
     //Service call to update our tasks
     this.getTasks();
   }

  ngOnInit() {
  }

}
