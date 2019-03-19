import { Component } from '@angular/core';
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
    this.tasks = this._taskService.tasks
  }
  ngOnInit(){
    console.log(this._taskService);
  }
}
