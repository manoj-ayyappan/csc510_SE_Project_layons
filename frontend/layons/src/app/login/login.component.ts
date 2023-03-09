// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css'],
// })
// export class LoginComponent {
//   /*Login component, get username, password and get status for applicant/employer */
//   /*If applicant and first time logged in, display the form, else go to search jobs page*/
//   /*Set the data about first time logged in, or to stay logged in after the first time in local storage (or) the backend */
// }

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
   selector: 'app-login',
   templateUrl: './login.component.html',
   styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   userName: string;
   password: string;
   //formData: FormGroup;
   error: string;

   constructor(private authService : AuthService, private router : Router) { 
    this.userName = '';
    this.password = '';
    this.error = '';
  //   this.formData = new FormGroup({
  //     userName: new FormControl(""),
  //     password: new FormControl(""),
  //  });
   }

   ngOnInit() {
      // this.formData = new FormGroup({
      //    userName: new FormControl("admin"),
      //    password: new FormControl("admin"),
      // });
   }

   onClickSubmit(data: any) {
      this.userName = data.userName;
      this.password = data.password;

      console.log("Login page: " + this.userName);
      console.log("Login page: " + this.password);

      this.authService.login(this.userName, this.password)
         .subscribe( data => { 
            console.log("Is Login Success: " + data); 
      
           if(data) this.router.navigate(['/expenses']); 
      });
   }
}
