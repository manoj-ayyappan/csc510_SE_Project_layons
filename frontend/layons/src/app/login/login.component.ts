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
   isUserLoggedIn: boolean | undefined;

   constructor(private authService : AuthService, private router : Router) { 
    this.userName = '';
    this.password = '';
    this.error = '';
   }

   ngOnInit() {}

   onClickSubmit() {
      console.log("Login page: " + this.userName);
      console.log("Login page: " + this.password);

      this.authService.login(this.userName, this.password)
         .subscribe( data => { 
            console.log("Is Login Success: " + data); 
      
            if(data) this.router.navigate(['/createprofile']); 
            else this.error = "Incorrect Credentials";
      });
   }
}
