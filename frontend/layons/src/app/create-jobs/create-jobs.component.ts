import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Job } from '../job';
import { JobsService } from '../jobs.service';

@Component({
  selector: 'app-create-jobs',
  templateUrl: './create-jobs.component.html',
  styleUrls: ['./create-jobs.component.css'],
})
export class CreateJobsComponent {
  /* Create Jobs page, get position, job desc, email, employer name, pay range, location from user */
  /* Once received, make a POST request to the backend with those details */
  /* On success, redirect to Create Jobs Page, maybe with a success message */
  /* The variables taken from input */

  createJobForm = new FormGroup({
    title: new FormControl('', Validators.required),
    employerName: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    minpay: new FormControl(0, Validators.required),
    maxpay: new FormControl(0, Validators.required),
    email: new FormControl('', Validators.required),
    location: new FormControl('', Validators.required),
  });

  constructor(private jobsservice: JobsService) {}

  onSubmit() {
    console.log(this.createJobForm.value);
    const title: string = this.createJobForm.value.title!;
    const description = this.createJobForm.value.description!;
    const payrangemin = this.createJobForm.value.minpay!;
    const payrangemax = this.createJobForm.value.maxpay!;
    const email = this.createJobForm.value.email!;
    const location = this.createJobForm.value.location!;
    const employerName = this.createJobForm.value.employerName!;
    const postJob: Job = {
      /*ID is set in backend*/
      title,
      description,
      payrangemax,
      payrangemin,
      email,
      location,
      employerName,
    };
    this.jobsservice.createjob(postJob).subscribe((job) => {
      alert('added' + job.title);
    });
  }
}
