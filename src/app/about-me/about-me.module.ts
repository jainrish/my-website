import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AboutMeComponent } from './about-me.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { WhoAmIComponent } from './whoami/whoami.component';
import { SkillsComponent } from './skills/skills.component';

const aboutMeRoutes: Routes = [
  { path: 'aboutme', component: AboutMeComponent }
];

export const aboutMeRouting = RouterModule.forChild(aboutMeRoutes);

@NgModule({
  imports: [CommonModule,
    RouterModule,
    aboutMeRouting],
  declarations: [
    AboutMeComponent, EducationComponent, ExperienceComponent, WhoAmIComponent, SkillsComponent, ExperienceComponent
  ],
  providers: [],
  exports: [AboutMeComponent]
})
export class AboutMeModule { }
