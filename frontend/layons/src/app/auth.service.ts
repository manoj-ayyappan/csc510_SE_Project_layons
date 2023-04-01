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
   usersList: User[] = [];

   isUserLoggedIn: boolean = false;
   //TODO: get users from backend - manoj/sourabh
   users = this.userservice.getAllUsers().subscribe((usersList) => {
      this.usersList = usersList;
      console.log("List of users: ",this.usersList);
    });
   
   // [
   //    {userName: 'sourabh', password: 'sourabh'},
   //    {userName: 'agashe', password: 'agashe'}
   // ]
   login(userName: string, password: string): Observable<any> {
      // console.log(userName);
      // console.log(password);
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

   return of(this.isUserLoggedIn).pipe(
      //delay(1000),
      tap(val => { 
         console.log("Is User Authentication is successful: " + val); 
      })
   );
   }

   logout(): void {
      this.isUserLoggedIn = false;
      localStorage.removeItem('isUserLoggedIn'); 
   }

}