import { Component } from '@angular/core';
import { ProfileService } from '../profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {

  // initializes profile parameters
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

  // initializes profile parameters with existing values
  ngOnInit(){
    this.firstName=this.profile.firstName;
    this.lastName=this.profile.lastName;
    this.email=this.profile.email;
    this.location=this.profile.location;
    this.skills=this.profile.skills;
    this.resume=this.profile.resume;
  }

  // handles on click save
  onSave(){
    if (this.firstName == '') {
      alert("Need first name");
      return;
    }
    if (this.lastName == '') {
      alert("Need last name");
      return;
    }
    if (this.email == '') {
      alert("Need email");
      return;
    }
    if (this.location == '') {
      alert("Need location");
      return;
    }
    if (this.skills == '') {
      alert("Need skills");
      return;
    }
    if (this.resume == undefined) {
      alert("Upload resume");
      return;
    }

    this.profile.firstName = this.firstName;
    this.profile.lastName = this.lastName;
    this.profile.email = this.email;
    this.profile.location = this.location;
    this.profile.skills = this.skills;
    this.profile.resume = this.resume;
    this.profileService.setProfileData(this.profile);
    alert('Profile Updated');

    // redirects to profile on successful updation
    this.router.navigateByUrl('/profile');
    
  }
  onResumeSelected(event: any) {
    this.resume = event.target.files[0];
  }
}
