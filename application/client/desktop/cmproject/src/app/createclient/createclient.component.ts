import { Component, OnInit } from '@angular/core';
import { CreateclientService } from './createclient.service';

@Component({
  selector: 'app-createclient',
  templateUrl: './createclient.component.html',
  styleUrls: ['./createclient.component.scss'],
})

export class CreateclientComponent implements OnInit {
    public client = {
        clientname: '',
    }

    constructor (
        private createclientService: CreateclientService,
    ) { }

    ngOnInit() {
    }
    GpCreate() {
        this.createclientService.GpCreate(this.client).subscribe(data => {
            this.client.clientname = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}