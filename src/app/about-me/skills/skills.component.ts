import { Component } from "@angular/core";

@Component({
    selector: 'skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.css']
})

export class SkillsComponent {
    pageTitle: string =  "Education History";
    imageWidth: number = 1000;
    imageHeight: number = 200;
    imageMargin: number = 10;
    imageLeftMargin: number = 5;
    descriptionMarginTop: number = 30;

    institutions: any[] = [
        {
            "institionId": 1,
            "institionName": "Netaji Subhas Institute of Technology, University of Delhi",
            "location": "Dwarka, New Delhi, India",
            "graduationDate": "May 31, 2015",
            "degree": "Bachelors of Engineering",
            "cgpa": 7.57,
            "url": "http://www.nsit.ac.in/",
            "image": "../../../assets/images/about-me/education/nsit.jpg",
            "description": "I pursued B.E. from NSIT, Delhi in the field of Computer Engineering. I started studying at NSIT from August, 2011 and graduated in May, 2015. Relevant subjects include Introduction to Programming, Data Structures, Principles of Computer Graphics, Database Management, Advance Computer Architecture, Operating Systems, Computer Systems Architecture.",
            "locationURL": "https://goo.gl/ncNBfQ"
        },
        {
            "institionId": 2,
            "institionName": "D.A.V. Public School",
            "location": "Sector 14, Gurgaon, Haryana, India",
            "graduationDate": "March 31, 2011",
            "degree": "Senior Secondary School Examination",
            "cgpa": "9.34",
            "url": "http://www.dav14gurgaon.org/page/index.html",
            "image": "../../../assets/images/about-me/education/dav.png",
            "description": "I studied in D.A.V. Public School from April, 2009 to March, 2011 and graduated with a percentage of 93.4. Relevant subjects include Mathematics, Physics and Chemistry. I scored 99/100 in Mathematics, 94/100 in Physics and 96/100 in Chemistry.",
            "locationURL": "https://goo.gl/gPZirz"
        },
        {
            "institionId": 3,
            "institionName": "Air Force School",
            "location": "Sector 14, Gurgaon, Haryana, India",
            "graduationDate": "March 31, 2009",
            "degree": "Secondary School Examination",
            "cgpa": "9.26",
            "url": "http://www.afsgurgaon.net/afs/index.html",
            "image": "../../../assets/images/about-me/education/afs.jpg",
            "description": "",
            "locationURL": "https://goo.gl/hiQbHn"
        }
    ]

    selectedInstutiteURL: string = this.institutions[0].image;
    selectedInstutiteDescription: string = this.institutions[0].description;

    updateInstitute(index) : void {
        this.selectedInstutiteURL = this.institutions[index].image;
        this.selectedInstutiteDescription = this.institutions[index].description;
    }
}   