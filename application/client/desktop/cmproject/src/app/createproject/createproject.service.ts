import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../../shared/shared.service';

@Injectable({
    providedIn: 'root'
})

export class CreateprojectService {
    constructor(
        private sharedService: SharedService,
        private http: HttpClient,
    ) { }

    GpCreate(project): Observable<any> {
        return this.http.post(this.sharedService.DESKTOP_API + '/project', project);
    }
    managerGpGetAllValues(): Observable<any> {
        return this.http.get(this.sharedService.DESKTOP_API + '/manager');
    }
    clientGpGetAllValues(): Observable<any> {
        return this.http.get(this.sharedService.DESKTOP_API + '/client');
    }
    leadGpGetAllValues(): Observable<any> {
        return this.http.get(this.sharedService.DESKTOP_API + '/lead');
    }
}