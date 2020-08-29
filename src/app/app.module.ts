import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KwotComponent } from './kwot/kwot.component';
import { FormComponent } from './form/form.component';
import { GoalFormComponent } from './goal-form/goal-form.component';

@NgModule({
  declarations: [
    AppComponent,
    KwotComponent,
    FormComponent,
    GoalFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
