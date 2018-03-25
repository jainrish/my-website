import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import {AboutMeModule} from './about-me/about-me.module'
import {AboutMeComponent} from './about-me/about-me.component'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AboutMeModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/', pathMatch: 'full', }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
