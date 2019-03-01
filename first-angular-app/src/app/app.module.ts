import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentInComponentComponent } from './component-in-component/component-in-component.component';
import { TasksComponent } from './component-in-component/tasks/tasks.component';
import { NotesComponent } from './component-in-component/notes/notes.component';
import { TimeComponent } from './component-in-component/time/time.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentInComponentComponent,
    TasksComponent,
    NotesComponent,
    TimeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
