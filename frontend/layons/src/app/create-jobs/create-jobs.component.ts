import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router,Routes } from '@angular/router';
import { Job } from '../job';
import { JobsService } from '../jobs.service';
import { ProfileComponent } from '../profile/profile.component';
import { LogoutComponent } from '../logout/logout.component';
import { AuthService } from '../auth.service';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-create-jobs',
  templateUrl: './create-jobs.component.html',
  styleUrls: ['./create-jobs.component.css'],
})
export class CreateJobsComponent {

  // initializes form controls with validation
  createJobForm = new FormGroup({
    title: new FormControl('', Validators.required),
    employerName: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    minpay: new FormControl(0, Validators.required),
    maxpay: new FormControl(0, Validators.required),
    email: new FormControl('', Validators.required),
    location: new FormControl('', Validators.required),
  });

  constructor(private jobsservice: JobsService, private router: Router, private authService: AuthService) {}

  // function to handle submit
  onSubmit() {
    const title: string = this.createJobForm.value.title!;
    const description = this.createJobForm.value.description!;
    const payrangemin = this.createJobForm.value.minpay!;
    const payrangemax = this.createJobForm.value.maxpay!;
    const email = this.createJobForm.value.email!;
    const location = this.createJobForm.value.location!;
    const employerName = this.createJobForm.value.employerName!;
    if (this.createJobForm.value.title == '') {
      alert("Please enter a Job Title");
      return;
    }
    if (this.createJobForm.value.description == '') {
      alert("Please enter a Job Description");
      return;
    }
    if (this.createJobForm.value.minpay == undefined) {
      alert("Please enter a valid Minimum Pay");
      return;
    }
    if (this.createJobForm.value.maxpay == undefined) {
      alert("Please enter a valid Maximum Pay");
      return;
    }
    if (this.createJobForm.value.email == "") {
      alert("Please enter an Email");
      return;
    }
    if (this.createJobForm.value.location == '') {
      alert("Please enter a Location");
      return;
    }
    if (this.createJobForm.value.employerName == '') {
      alert("Please enter an employer Name");
      return;
    }

    // creates job object to send to backend
    const postJob: Job = {
      title,
      description,
      payrangemax,
      payrangemin,
      email,
      location,
      employerName,
    };

    // makes POST request to backend to create the job
    this.jobsservice.createjob(postJob).subscribe((job) => {
      alert('Added ' + job.title);
    });
  }

  // handles on click profile for navbar
  onClickProfile(){
    this.router.navigateByUrl('/profile')
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
}

// handles email validation
function validateEmail(email: string): boolean {
  // Regular expression for email validation
  const emailRegex = new RegExp('/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/');
  return emailRegex.test(email);
}