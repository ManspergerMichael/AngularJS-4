import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tasks: any[] = [
    {title:'First Task',status:'false'},
    {title:'Second Task',status:'true'},
    {title:'Third Task',status:'false'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
