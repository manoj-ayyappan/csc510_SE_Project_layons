import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { UserService } from '../app/user.service';
import { User } from './user';

@Injectable({
   providedIn: 'root',
 })
export class AuthService {

   constructor(private userservice: UserService) {}

   // initializes list of users and isUserLoggedIn
   usersList: User[] = [];

   isUserLoggedIn: boolean = false;

   // gets all users from User.service
   users = this.userservice.getAllUsers().subscribe((usersList) => {
      this.usersList = usersList;
    });

   // handles user login
   login(userName: string, password: string): Observable<any> {
      for(let i =0; i<this.usersList.length; i++){
         if(this.usersList[i].userName == userName && this.usersList[i].password == password){
            this.isUserLoggedIn = true;
            localStorage.setItem('isUserLoggedIn', 'true');
            break;
         }
         else{
            this.isUserLoggedIn = false;
            localStorage.setItem('isUserLoggedIn', 'false');
         }
      }
   
   // returns result of user authentication
   return of(this.isUserLoggedIn).pipe(
      tap(val => {
      })
   );
   }

   // handles user logout
   logout(): void {
      this.isUserLoggedIn = false;
      localStorage.removeItem('isUserLoggedIn'); 
   }

}