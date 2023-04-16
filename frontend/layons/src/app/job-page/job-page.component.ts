import { Component, OnInit } from '@angular/core';
import { Router, Routes, ActivatedRoute, ParamMap } from '@angular/router';
import { map } from 'rxjs/operators';
import { JobsService } from '../jobs.service';
import { Job } from '../job';
import { AuthService } from '../auth.service';

import { JobsService } from '../jobs.service';
import { Job } from '../job';

@Component({
  selector: 'app-job-page',
  templateUrl: './job-page.component.html',
  styleUrls: ['./job-page.component.css'],
})
export class JobPageComponent implements OnInit {
  /*  Default Job ID is -1, check for a valid jobID before doing calls to DB*/
  jobid: string = '-1';
  jobDetails: Job | undefined;
  applied: boolean=false;
  constructor(private route: ActivatedRoute, private jobsservice: JobsService, private router: Router, private authService: AuthService) {
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
    /Valid Job ID here/
    /* jobDetails: Job; */
    this.jobsservice.getJob(this.jobid).subscribe((job) => {
      console.log(job);
      this.jobDetails = job;
    });
  }
  apply() {
    this.applied = true;
    console.log(this.jobDetails?.jobId, "Applied");
  }
  onLogout(){
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
  onClickSearch(){
    this.router.navigateByUrl('/search');
  }
  onClickCreateJobs(){
    console.log("Calling onClickCreateJobs")
    this.router.navigateByUrl('/create');
  }
  onClickProfile(){
    this.router.navigateByUrl('/profile');
  }
}
