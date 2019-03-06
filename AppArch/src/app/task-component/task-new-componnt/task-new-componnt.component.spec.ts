import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskNewComponntComponent } from './task-new-componnt.component';

describe('TaskNewComponntComponent', () => {
  let component: TaskNewComponntComponent;
  let fixture: ComponentFixture<TaskNewComponntComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskNewComponntComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskNewComponntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
