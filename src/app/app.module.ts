import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AboutMeModule} from './about-me/about-me.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AboutMeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
