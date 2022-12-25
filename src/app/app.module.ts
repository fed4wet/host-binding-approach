import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import {AppRoutingModule} from "./app.routing.module";

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    ButtonComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
