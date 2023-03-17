import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../profile.service';


@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent {
  firstName: string='';
  lastName: string='';
  email: string='';
  location: string='';
  skills: string='';
  resume?: File;
  profile: any = {};

  constructor(private router: Router, private profileService: ProfileService) {}

  onSubmit() {
    console.log("OnSubmit Triggered");
    this.profile.firstName = this.firstName;
    this.profile.lastName = this.lastName;
    this.profile.email = this.email;
    this.profile.location = this.location;
    this.profile.skills = this.skills;
    this.profile.resume = this.resume;

    // Save profile to state or database here
    this.profileService.setProfileData(this.profile);

    this.router.navigateByUrl('/profile');
  }

  onResumeSelected(event: any) {
    this.resume = event.target.files[0];
  }
}
