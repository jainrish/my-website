import { Component } from '@angular/core';
import { EducationComponent } from './education/education.component';

@Component({
  selector: 'about-me',
  templateUrl: './about-me.component.html'
})


export class AboutMeComponent {

  showWhoAmI: boolean;
  showEducation: boolean;
  showSkills: boolean;
  showExperience: boolean;

  constructor() {
    this.showWhoAmI = true;
    this.showEducation = false;
    this.showSkills = false;
    this.showExperience = false;
  }

  showWhoAmIMethod(): void {
    this.showWhoAmI = true;
    this.showEducation = false;
    this.showSkills = false;
    this.showExperience = false;
  }

  showEducationMethod(): void {
    this.showWhoAmI = false;
    this.showEducation = true;
    this.showSkills = false;
    this.showExperience = false;
  }

  showSkillsMethod(): void {
    this.showWhoAmI = false;
    this.showEducation = false;
    this.showSkills = true;
    this.showExperience = false;
  }

  showExperienceMethod(): void {
    this.showWhoAmI = false;
    this.showEducation = false;
    this.showSkills = false;
    this.showExperience = true;
  }

}

