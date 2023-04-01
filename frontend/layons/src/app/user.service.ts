import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {User} from './user';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersRootUrl = 'http://localhost:3000/users';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  private log(message: string) {
    console.log(`JobsService: ${message}`);
  }
  constructor(private http: HttpClient) {}

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  getAllUsers(): Observable<User[]> {
    const url = `${this.usersRootUrl}/all-users`;
    return this.http.get<User[]>(url).pipe(
      tap((_) => {}),
      catchError(this.handleError<User[]>(`Error getting all users`))
    );
  }

}
