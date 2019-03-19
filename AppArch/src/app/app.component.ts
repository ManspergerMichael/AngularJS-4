import { Component } from '@angular/core';
//import the service to access its data
import { TaskServiceService } from './task/task-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'AppArch';
  tasks: Array<any>;
  constructor(private _taskService: TaskServiceService){
    //this line retreves the array of objects in TaskService
    this.tasks = this._taskService.tasks
  }
  ngOnInit(){
    console.log(this._taskService);
  }
}
