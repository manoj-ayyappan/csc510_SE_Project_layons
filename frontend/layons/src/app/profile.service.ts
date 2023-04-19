import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  // stores user profile data
  profileData: any = {};

  // initialize HTTP headers
  httpOptions = {} as any;

  // handles logging errors and messages
  private log(message: string) {
    console.log(`prof service: ${message}`);
  }

  // handles errors
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
  constructor(private http: HttpClient) {}

  // handles user resume upload
  uploadresume(resume: FormData): Observable<string> {
  return this.http.post<any>('http://localhost:3000/resume', resume, this.httpOptions).pipe(
      catchError(this.handleError<any>('Error'))
    );
}
  // handles setting user profile data
  setProfileData(data: any) {
    this.profileData = data;
    let resume:FormData = new FormData();
    resume.append('file_upload', data.resume,data.resume.name);
    this.uploadresume(resume).subscribe(_=> {})
    localStorage.setItem('profile_object', JSON.stringify(this.profileData));
  }

  // handles getting user profile data
  getProfileData() {
    let data1=localStorage.getItem('profile_object');
    if(data1!=null){ 
      this.profileData=JSON.parse(data1);
      return this.profileData;
    }
  }
}
