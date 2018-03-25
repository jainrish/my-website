import { Component } from '@angular/core';
import { AboutMeComponent } from './about-me/about-me.component';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  socialMediaLinks: any[] = [
    {
      "mediaID": 1,
      "profileLink": "https://www.instagram.com/rishbishjain",
      "cssClass": "fa fa-instagram",
      "title": "Follow me on instagram"
    },
    {
      "mediaID": 2,
      "profileLink": "https://www.facebook.com/rishabh189",
      "cssClass": "fa fa-facebook",
      "title": "Connect with me on facebook"
    }, 
    
    {
      "mediaID": 3,
      "profileLink": "https://www.quora.com/profile/Rishabh-Jain-41",
      "cssClass": "fa fa-quora",
      "title": "Follow me on quora"
    },
    {
      "mediaID": 3,
      "profileLink": "https://rishabhjainnsit.wordpress.com/",
      "cssClass": "fa fa-wordpress",
      "title": "Read my blog on wordpress"
    },
    {
      "mediaID": 4,
      "profileLink": "https://www.linkedin.com/in/rjain189/",
      "cssClass": "fa fa-linkedin",
      "title": "Connect with me on linkedin"
    },
    {
      "mediaID": 5,
      "profileLink": "https://github.com/jainrish",
      "cssClass": "fa fa-github",
      "title": "View my github repository"
    },  
    
  ]
}