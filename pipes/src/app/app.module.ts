import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //for two way binding

import { AppComponent } from './app.component';
import { CurencyComponent } from './curency/curency.component';
import { DateComponent } from './date/date.component';
import { TimeComponent } from './time/time.component';
import { DatetimeComponent } from './datetime/datetime.component';

@NgModule({
  declarations: [
    AppComponent,
    CurencyComponent,
    DateComponent,
    TimeComponent,
    DatetimeComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
