import { Component, OnInit } from '@angular/core';
import { GetallprojectService } from './getallproject.service';

@Component({
  selector: 'app-getallproject',
  templateUrl: './getallproject.component.html',
  styleUrls: ['./getallproject.component.scss'],
})

export class GetallprojectComponent implements OnInit {
    columnDefs: any = [{ headerName: 'Project Name', field: 'projectname'  },{ headerName: 'Technology', field: 'technology'  },{ headerName: 'Manager', field: 'manager'  },{ headerName: 'Client', field: 'client'  },{ headerName: 'Lead', field: 'lead'  },];
    public project = {
        projectname: '',
        technology: '',
        manager: '',
        client: '',
        lead: '',
    }
    paginationPageSize = 10;
 	page=1;
 	rowData: any = [];

    constructor (
        private getallprojectService: GetallprojectService,
    ) { }

    ngOnInit() {
        this.GpGetAllValues();
    }
    GpGetAllValues() {
        this.getallprojectService.GpGetAllValues().subscribe(data => {
            this.rowData = data;
        },
        error => {
            console.log('Error', error);
        });
    }
}