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
  profile: any;

  constructor(private profileService: ProfileService, private router: Router, private authService: AuthService){
    this.profile=this.profileService.getProfileData();
  }
  onClickEdit(){
    this.router.navigateByUrl('/edit_profile');
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
  isresumeuploaded(){
    if(this.profile.resume!=null){
      return "Uploaded";
    }
    else{
      return "Not Uploaded";
    }
  }
}
