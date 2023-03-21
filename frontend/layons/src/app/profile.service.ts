import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  profileData: any = {};

  setProfileData(data: any) {
    this.profileData = data;
    localStorage.setItem('profile_object', JSON.stringify(this.profileData));
  }

  getProfileData() {
    let data1=localStorage.getItem('profile_object');
    if(data1!=null){ 
      this.profileData=JSON.parse(data1);
      return this.profileData;
    }
  }
}
