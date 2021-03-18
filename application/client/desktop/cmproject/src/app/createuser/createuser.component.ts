import { Component, OnInit } from '@angular/core';
import { CreateuserService } from './createuser.service';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.scss'],
})

export class CreateuserComponent implements OnInit {
    public user = {
        firstname: '',
        lastname: '',
        email: '',
        passwordofuser: '',
    }

    constructor (
        private createuserService: CreateuserService,
    ) { }

    ngOnInit() {
    }
    GpCreate() {
        this.createuserService.GpCreate(this.user).subscribe(data => {
            this.user.firstname = ''
 	 	this.user.lastname = ''
 	 	this.user.email = ''
 	 	this.user.passwordofuser = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}