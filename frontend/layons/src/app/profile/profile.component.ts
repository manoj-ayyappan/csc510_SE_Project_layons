import { Component } from '@angular/core';
import { ProfileService } from '../profile.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { LogoutComponent } from '../logout/logout.component';

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
  isresumeuploaded(){
    if(this.profile.resume!=null){
      return "Uploaded";
    }
    else{
      return "Not Uploaded";
    }
  }
}
