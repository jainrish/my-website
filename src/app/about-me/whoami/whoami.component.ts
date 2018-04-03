import { Component } from "@angular/core";

@Component({
    selector: 'whoami',
    templateUrl: './whoami.component.html',
    styleUrls: ['./whoami.component.css']
})

export class WhoAmIComponent {
    pageTitle: string =  "Education History";
    imageWidth: number = 250;
    imageHeight: number = 250;
    imageMargin: number = 10;
    imageLeftMargin: number = 5;
    descriptionMarginTop: number = 30;

    whoamiSummary: any = 
        {
            "image": "../../../assets/images/about-me/whoami/dp.jpg",
            "description": "I pursued B.E. from NSIT, Delhi in the field of Computer Engineering. I started studying at NSIT from August, 2011 and graduated in May, 2015. Relevant subjects include Introduction to Programming, Data Structures, Principles of Computer Graphics, Database Management, Advance Computer Architecture, Operating Systems, Computer Systems Architecture."
        }
    

}   