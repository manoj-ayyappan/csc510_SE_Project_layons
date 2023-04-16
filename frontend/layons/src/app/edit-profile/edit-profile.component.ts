import { Component } from '@angular/core';
import { ProfileService } from '../profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {
  firstName: string='';
  lastName: string='';
  email: string='';
  location: string='';
  skills: string='';
  resume?: File;
  profile: any = {};
  constructor(private router: Router, private profileService: ProfileService){
    this.profile=this.profileService.getProfileData();
  }

  ngOnInit(){
    this.firstName=this.profile.firstName;
    this.lastName=this.profile.lastName;
    this.email=this.profile.email;
    this.location=this.profile.location;
    this.skills=this.profile.skills;
    this.resume=this.profile.resume;
  }

  onSave(){
    console.log("OnSave Triggered");
    this.profile.firstName = this.firstName;
    this.profile.lastName = this.lastName;
    this.profile.email = this.email;
    this.profile.location = this.location;
    this.profile.skills = this.skills;
    this.profile.resume = this.resume;
    
    this.profileService.setProfileData(this.profile);
    this.router.navigateByUrl('/profile');
  }
  onResumeSelected(event: any) {
    this.resume = event.target.files[0];
  }
}
