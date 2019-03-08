import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//import Input to receve data from parent, Output to send data back

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  @Input() tasks: any[];
  @Output() updateTasksChild = new EventEmitter();

  constructor() { }
  onSomeEvent(){
    this.updateTasksChild.emit();
  }

  ngOnInit() {
  }

}
