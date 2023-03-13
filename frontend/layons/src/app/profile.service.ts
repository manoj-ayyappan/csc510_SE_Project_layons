import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  profileData: any = {};

  setProfileData(data: any) {
    this.profileData = data;
    localStorage.setItem('testObject', JSON.stringify(this.profileData));
  }

  getProfileData() {
    let data1=localStorage.getItem('testObject');
    if(data1!=null){ 
      this.profileData=JSON.parse(data1);
      console.log(typeof(this.profileData));
      return this.profileData;
    }
  }
}
