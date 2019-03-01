import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curency',
  templateUrl: './curency.component.html',
  styleUrls: ['./curency.component.css']
})
export class CurencyComponent implements OnInit {
  value: number;
  
  constructor() { 
    
  }

  ngOnInit() {
    this.value = 14.88;
  }

}
