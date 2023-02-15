import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-job-page',
  templateUrl: './job-page.component.html',
  styleUrls: ['./job-page.component.css'],
})
export class JobPageComponent implements OnInit {
  /*  Default Job ID is -1, check for a valid jobID before doing calls to DB*/
  jobid: string = '-1';
  constructor(private route: ActivatedRoute) {
    route.params.pipe(map((p) => p['jobid'])).subscribe(
      (response) => {
        this.jobid = response;
      },
      (err) => {
        console.error('Error: ' + err);
      },
      () => {
        console.log('Completed');
      }
    );
  }
  ngOnInit() {
    /*Valid Job ID here*/
    console.log(this.jobid);
  }
}
