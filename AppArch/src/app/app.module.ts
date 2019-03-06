import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponentComponent } from './task-component/task-component.component';
import { TaskListComponentComponent } from './task-list-component/task-list-component.component';
import { TaskNewComponentComponent } from './task-new-component/task-new-component.component';
import { TaskNewComponntComponent } from './task-component/task-new-componnt/task-new-componnt.component';
import { TaskServiceComponent } from './task-service/task-service.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponentComponent,
    TaskListComponentComponent,
    TaskNewComponentComponent,
    TaskNewComponntComponent,
    TaskServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
