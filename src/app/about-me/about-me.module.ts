import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutMeComponent } from './about-me.component';
import {EducationComponent} from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';


@NgModule({
    imports: [CommonModule],
  declarations: [
    AboutMeComponent, EducationComponent, ExperienceComponent
  ],
  providers: [],
  exports: [AboutMeComponent]
})  
export class AboutMeModule { }
