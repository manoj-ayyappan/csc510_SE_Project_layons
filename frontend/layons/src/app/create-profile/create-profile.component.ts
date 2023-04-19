import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../profile.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent {

  firstName: string = '';
  lastName: string = '';
  email: string = '';
  location: string = '';
  skills: string = '';
  resume?: File;
  profile: any = {};

  constructor(private router: Router, private profileService: ProfileService) { }

  onSubmit() {
    this.profile.firstName = this.firstName;
    this.profile.lastName = this.lastName;
    this.profile.email = this.email;
    this.profile.location = this.location;
    this.profile.skills = this.skills;
    this.profile.resume = this.resume;
    if (this.profile.firstName == '') {
      alert("Need first name");
      return;
    }
    if (this.profile.lastName == '') {
      alert("Need last name");
      return;
    }
    if (this.profile.email == '') {
      alert("Need email");
      return;
    }
    if (this.profile.location == '') {
      alert("Need location");
      return;
    }
    if (this.profile.skills == '') {
      alert("Need skills");
      return;
    }
    if (this.profile.resume == undefined) {
      alert("Upload resume");
      return;
    }
    this.profileService.setProfileData(this.profile);
    alert('Profile Created');

    this.router.navigateByUrl('/profile');
  }

  onResumeSelected(event: any) {
    this.resume = event.target.files[0];
  }
}
