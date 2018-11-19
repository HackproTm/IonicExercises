import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './exercise2-routing.module';
import { Exercise2Component } from './exercise2.component';

@NgModule({
  declarations: [
    Exercise2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [Exercise2Component]
})
export class AppExercise2 { }
