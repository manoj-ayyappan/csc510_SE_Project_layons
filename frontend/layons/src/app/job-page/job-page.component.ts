import { Component, OnInit } from '@angular/core';
import { Router, Routes, ActivatedRoute, ParamMap } from '@angular/router';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth.service';
import { JobsService } from '../jobs.service';
import { Job } from '../job';

@Component({
  selector: 'app-job-page',
  templateUrl: './job-page.component.html',
  styleUrls: ['./job-page.component.css'],
})

export class JobPageComponent implements OnInit {

  // initializes job parameters
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
      }
    );
  }

  // initializes job parameters with existing details by jobid
  ngOnInit() {
    this.jobsservice.getJob(this.jobid).subscribe((job) => {
      this.jobDetails = job;
    });
  }

  // handles on click apply
  apply() {
    this.applied = true;
  }

  // handles on click logout for navbar
  onLogout(){
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

  // handles on click search for navbar
  onClickSearch(){
    this.router.navigateByUrl('/search');
  }

  // handles on click create jobs for navbar
  onClickCreateJobs(){
    this.router.navigateByUrl('/create');
  }

  // handles on click profile for navbar
  onClickProfile(){
    this.router.navigateByUrl('/profile');
  }
}
