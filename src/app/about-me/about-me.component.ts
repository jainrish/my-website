import { Component } from '@angular/core';
import { EducationComponent } from './education/education.component';

@Component({
  selector: 'about-me',
  templateUrl: './about-me.component.html'
})


export class AboutMeComponent {

  showWhoAmI: boolean;
  showEducation: boolean;

  constructor() {
    this.showWhoAmI = true;
    this.showEducation = false;
  }

  ShowWhoAmI() {
    this.showWhoAmI = true;
    this.showEducation = false;
    console.log(this.showEducation);
  }

  ShowEducation() {
    this.showWhoAmI = false;
    this.showEducation = true;
    console.log(this.showEducation);
  }
}

