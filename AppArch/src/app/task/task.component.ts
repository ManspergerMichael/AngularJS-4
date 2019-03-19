import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  //this array of objects is what will be passed back and forth
  tasks: any[] = [
    {title:"Eat Shit"},
    {title:"Die"}
  ]; 
  constructor() { }

  ngOnInit() {
  }

}
