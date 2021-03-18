import { Component, OnInit } from '@angular/core';
import { CreatemanagerService } from './createmanager.service';

@Component({
  selector: 'app-createmanager',
  templateUrl: './createmanager.component.html',
  styleUrls: ['./createmanager.component.scss'],
})

export class CreatemanagerComponent implements OnInit {
    public manager = {
        managername: '',
    }

    constructor (
        private createmanagerService: CreatemanagerService,
    ) { }

    ngOnInit() {
    }
    GpCreate() {
        this.createmanagerService.GpCreate(this.manager).subscribe(data => {
            this.manager.managername = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}