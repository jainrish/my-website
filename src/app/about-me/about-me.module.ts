import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AboutMeComponent } from './about-me.component';
import {EducationComponent} from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import {WhoAmIComponent} from './whoami/whoami.component';

const aboutMeRoutes: Routes = [
  { path: 'aboutme',  component: AboutMeComponent },
  { path: 'aboutme/whoami',  component: WhoAmIComponent },
  { path: 'aboutme/education',  component: EducationComponent },
  { path: 'aboutme/experience',  component: ExperienceComponent }
];

export const aboutMeRouting = RouterModule.forChild(aboutMeRoutes);

@NgModule({
    imports: [CommonModule, 
      RouterModule,
      aboutMeRouting],
  declarations: [
    AboutMeComponent, EducationComponent, ExperienceComponent, WhoAmIComponent
  ],
  providers: [],
  exports: [AboutMeComponent]
})  
export class AboutMeModule { }
