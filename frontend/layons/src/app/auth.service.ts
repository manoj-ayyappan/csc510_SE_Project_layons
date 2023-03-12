import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

export class AuthService {

   isUserLoggedIn: boolean = false;
   users = [
      {userName: 'sourabh', password: 'sourabh'},
      {userName: 'agashe', password: 'agashe'}
   ]
   login(userName: string, password: string): Observable<any> {
      console.log(userName);
      console.log(password);
      for(let i =0; i<this.users.length; i++){
         if(this.users[i].userName == userName && this.users[i].password == password){
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
      delay(1000),
      tap(val => { 
         console.log("Is User Authentication is successful: " + val); 
      })
   );
   }

   logout(): void {
      this.isUserLoggedIn = false;
      localStorage.removeItem('isUserLoggedIn'); 
   }

   constructor() { }
}