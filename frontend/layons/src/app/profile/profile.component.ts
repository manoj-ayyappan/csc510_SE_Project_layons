import { Component } from '@angular/core';
import { ProfileService } from '../profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  profile: any;

  constructor(private profileService: ProfileService, private router: Router){
    this.profile=this.profileService.getProfileData();
  }
  onClickEdit(){
    this.router.navigateByUrl('/edit_profile');
  }
  onLogout(){
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
