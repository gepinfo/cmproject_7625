import { Component, OnInit } from '@angular/core';
import { CreateplansService } from './createplans.service';

@Component({
  selector: 'app-createplans',
  templateUrl: './createplans.component.html',
  styleUrls: ['./createplans.component.scss'],
})

export class CreateplansComponent implements OnInit {
    public plan = {
        planname: '',
    }

    constructor (
        private createplansService: CreateplansService,
    ) { }

    ngOnInit() {
    }
    GpCreate() {
        this.createplansService.GpCreate(this.plan).subscribe(data => {
            this.plan.planname = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}