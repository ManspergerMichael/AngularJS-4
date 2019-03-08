import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//import Input to receve data from parent, Output to send data back
//Event emmetier will bubble up an event to the parent component

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  @Input() tasks: any[];
  //this event triggers an event in the parent
  @Output() updateTasksList = new EventEmitter();

  constructor() { 
    this.update();
  }
  //This will trigger the update tasks event emitter
  
  ngOnInit() {
  }
  update(){
    this.updateTasksList.emit();
  }

}
