import { Component } from "@angular/core";

@Component({
    selector: 'experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.css']
})

export class ExperienceComponent {
    pageTitle: string =  "Work Experience";
    imageWidth: number = 1000;
    imageHeight: number = 200;
    imageMargin: number = 10;
    imageLeftMargin: number = 5;
    descriptionMarginTop: number = 30;

    experiences: any[] = [
        {
          "companyId": 1,
          "companyName": "Morgan Stanley",
          "companyUrl": "https://www.morganstanley.com/",
          "location": "Bengaluru, India",
          "locationUrl": "https://goo.gl/FSgixt",
          "period": "October, 2017 - Present",
          "designation": "Senior Associate",
          "projects": [
            {
              "projectID": 1,
              "projectName": "ObjectModel and Distributed Cache",
              "description": [
                {
                  "line": "Implemented a distributed “Gemfire“ caching system, which allows clients with extremely fast access to data"
                },
                {
                  "line": "Created REST and SOAP based Web Services on top of cache"
                },
                {
                  "line": "Key Achievements: Brought down the latency of web service to 50-60 ms as compared to 2 seconds earlier"
                },
                {
                  "line": "o Handling 5000 requests per second, system was running 200 million evaluations in 12 hours, same used to take more than 2 weeks before."
                }
              ]
            }
          ]
        },
        {
          "companyId": 2,
          "companyName": "Accolite Inc.",
          "companyUrl": "http://accolite.com/",
          "location": "Bengaluru, India",
          "locationUrl": "https://goo.gl/U3ttxD",
          "period": "July, 2015 - October, 2017",
          "designation": "Senior Software Engineer",
          "projects": [
            {
              "projectID": 1,
              "projectName": "Conference Room Management System (CRMS)",
              "description": [
                {
                  "line": "Developed a fast, secure and user-friendly web application that lets a user book a conference room across all the locations of a company"
                },
                {
                  "line": "Implemented features such as admin override feature and email notification features"
                }, {
                  "line": "Responsible for developing restful APIs for website and optimized by caching generic requests using Guava cache"
                }
              ]
            }
          ]
        },
        {
          "companyId": 3,
          "companyName": "Samsung Research Institute",
          "companyUrl": "http://www.samsung.com/", 
          "location": "Bengaluru, India",
          "locationUrl": "https://goo.gl/c871aZ",
          "period": "June, 2014 - July 2014",
          "designation": "Intern",
          "projects": [
            {
              "projectID": 1,
              "projectName": "Access Control System",
              "description": [
                {
                  "line": "Analyzed several research papers and implemented several One Time Password (OTP) algorithms including TOTP, HOTP, and OCRA"
                },
                {
                  "line": "Analyzed several research papers and implemented several One Time Password (OTP) algorithms including TOTP, HOTP, and OCRA"
                }
              ]
            }
          ]
        }
      ]

}   