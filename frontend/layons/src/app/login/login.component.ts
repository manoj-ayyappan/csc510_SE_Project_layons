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
   error: string;
   usernameInvalid: boolean = false;
   passwordInvalid: boolean = false;
   isUserLoggedIn: boolean | undefined;

   constructor(private authService : AuthService, private router : Router) { 
    this.userName = '';
    this.password = '';
    this.error = '';
   }

   ngOnInit() {}

   onClickSubmit() {
      this.usernameInvalid = this.userName === '';
      this.passwordInvalid = this.password === '';

      if (!this.usernameInvalid && !this.passwordInvalid) {
         console.log("Login page: " + this.userName);
         console.log("Login page: " + this.password);

         this.authService.login(this.userName, this.password)
            .subscribe( data => { 
               console.log("Is Login Success: " + data); 
               if(data) this.router.navigate(['/createprofile']); 
               else this.error = "Incorrect Credentials";
         });
      }

      // if(this.password == ''){
      //    this.passwordInvalid = true;
      // }
      // if(this.userName == ''){
      //    this.usernameInvalid = true;
      // }
      // console.log("Login page: " + this.userName);
      // console.log("Login page: " + this.password);

      this.authService.login(this.userName, this.password)
         .subscribe( data => { 
            console.log("Is Login Success: " + data); 
      
            if(data) this.router.navigate(['/createprofile']); 
            else this.error = "Incorrect Credentials";
      });
   }
}
