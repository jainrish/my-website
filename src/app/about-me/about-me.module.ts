import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutMeComponent } from './about-me.component';
import {EducationComponent} from './education/education.component';

@NgModule({
    imports: [CommonModule],
  declarations: [
    AboutMeComponent, EducationComponent
  ],
  providers: [],
  exports: [AboutMeComponent]
})  
export class AboutMeModule { }
