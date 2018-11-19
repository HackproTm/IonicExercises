import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './exercise1-routing.module';
import { Exercise1Component } from './exercise1.component';

@NgModule({
  declarations: [
    Exercise1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [Exercise1Component]
})
export class AppExercise1 { }
