import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tasks: any[] = [ 
    {title:'first task'},
    {title:'second task'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
