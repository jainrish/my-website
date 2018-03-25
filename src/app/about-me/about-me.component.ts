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

  constructor() {
    this.showWhoAmI = true;
    this.showEducation = false;
    this.showSkills = false;
  }

  ShowWhoAmI() {
    this.showWhoAmI = true;
    this.showEducation = false;
    this.showSkills = false;
  }

  ShowEducation() {
    this.showWhoAmI = false;
    this.showEducation = true;
    this.showSkills = false;
  }

  ShowSkills() {
    this.showWhoAmI = false;
    this.showEducation = false;
    this.showSkills = true;
  }
}

