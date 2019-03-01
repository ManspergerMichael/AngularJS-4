import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentInComponentComponent } from './component-in-component.component';

describe('ComponentInComponentComponent', () => {
  let component: ComponentInComponentComponent;
  let fixture: ComponentFixture<ComponentInComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentInComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentInComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
