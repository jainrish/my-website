import { Component } from "@angular/core";

@Component({
    selector: 'skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.css']
})

export class SkillsComponent {
    pageTitle: string = "Skills";
    descriptionMarginTop: number = 30;

    static PROGRESS_INFO: string = 'progress-bar progress-bar-info progress-bar-striped active';
    static PROGRESS_WARNING: string = 'progress-bar progress-bar-warning progress-bar-striped active';
    static PROGRESS_SUCCESS: string = 'progress-bar progress-bar-success progress-bar-striped active';

    skills: any[] = [
        {
            "skillId": 1,
            "skillName": "Problem Solving",
            "skillProficiency": "90%",
            "skillProficiencyInt": 90
        }, {
            "skillId": 2,
            "skillName": "Java/J2EE Development",
            "skillProficiency": "95%",
            "skillProficiencyInt": 95
        }, {
            "skillId": 3,
            "skillName": "Python Scripting",
            "skillProficiency": "85%",
            "skillProficiencyInt": 85
        }, {
            "skillId": 4,
            "skillName": "UI/UX Development",
            "skillProficiency": "70%",
            "skillProficiencyInt": 70
        }, {
            "skillId": 5,
            "skillName": "REST/SOAP Web Services",
            "skillProficiency": "92%",
            "skillProficiencyInt": 92
        }, {
            "skillId": 6,
            "skillName": "Databases",
            "skillProficiency": "85%",
            "skillProficiencyInt": 85
        }
    ]


    getSkillsProgressBarCSSClass(skillProficiency): string {
        if (skillProficiency >= 90) {
            return SkillsComponent.PROGRESS_SUCCESS;
        } else if (skillProficiency >= 80) {
            return SkillsComponent.PROGRESS_INFO;
        } else {
            return SkillsComponent.PROGRESS_WARNING;
        }
    }

}   