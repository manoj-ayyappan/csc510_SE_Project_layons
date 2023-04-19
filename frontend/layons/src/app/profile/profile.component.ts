import { Component } from '@angular/core';
import { ProfileService } from '../profile.service';
import { Router,Routes } from '@angular/router';
import { AuthService } from '../auth.service';
import { LogoutComponent } from '../logout/logout.component';
import { CreateJobsComponent } from '../create-jobs/create-jobs.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent {

  // initializes profile object
  profile: any;

  constructor(private profileService: ProfileService, private router: Router, private authService: AuthService){
    this.profile=this.profileService.getProfileData();
  }

  // handles on click edit for navbar
  onClickEdit(){
    this.router.navigateByUrl('/edit_profile');
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

  // checks if resume is uploaded
  isresumeuploaded(){
    if(this.profile.resume!=null){
      return "Uploaded";
    }
    else{
      return "Not Uploaded";
    }
  }
}