import { Component, OnInit } from '@angular/core';
import { CreateleadService } from './createlead.service';

@Component({
  selector: 'app-createlead',
  templateUrl: './createlead.component.html',
  styleUrls: ['./createlead.component.scss'],
})

export class CreateleadComponent implements OnInit {
    public lead = {
        leadname: '',
    }

    constructor (
        private createleadService: CreateleadService,
    ) { }

    ngOnInit() {
    }
    GpCreate() {
        this.createleadService.GpCreate(this.lead).subscribe(data => {
            this.lead.leadname = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}