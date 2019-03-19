import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { TaskListComponent } from './task/task-list/task-list.component';
import { TaskNewComponent } from './task/task-new/task-new.component';
import { TaskServiceService } from './task/task-service.service';



@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TaskListComponent,
    TaskNewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TaskServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
