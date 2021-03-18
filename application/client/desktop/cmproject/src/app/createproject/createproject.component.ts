import { Component, OnInit } from '@angular/core';
import { CreateprojectService } from './createproject.service';

@Component({
  selector: 'app-createproject',
  templateUrl: './createproject.component.html',
  styleUrls: ['./createproject.component.scss'],
})

export class CreateprojectComponent implements OnInit {
    manageritemArray: any = [];
    clientitemArray: any = [];
    leaditemArray: any = [];
    public project = {
        projectname: '',
        technology: '',
        manager: '',
        client: '',
        lead: '',
    }

    constructor (
        private createprojectService: CreateprojectService,
    ) { }

    ngOnInit() {
    }
    managerGpGetAllValues() {
        this.createprojectService.managerGpGetAllValues().subscribe(data => {
            this.manageritemArray = data;
        },
        error => {
            console.log('Error', error);
        });
    }
    clientGpGetAllValues() {
        this.createprojectService.clientGpGetAllValues().subscribe(data => {
            this.clientitemArray = data;
        },
        error => {
            console.log('Error', error);
        });
    }
    leadGpGetAllValues() {
        this.createprojectService.leadGpGetAllValues().subscribe(data => {
            this.leaditemArray = data;
        },
        error => {
            console.log('Error', error);
        });
    }
    GpCreate() {
        this.createprojectService.GpCreate(this.project).subscribe(data => {
            this.project.projectname = ''
 	 	this.project.technology = ''
 	 	this.project.manager = ''
 	 	this.project.client = ''
 	 	this.project.lead = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}