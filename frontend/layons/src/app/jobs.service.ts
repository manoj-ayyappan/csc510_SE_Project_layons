import { Injectable } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Job } from './job';

@Injectable({
  providedIn: 'root',
})
export class JobsService {
  private jobRootUrl = 'http://localhost:3000/jobs/';
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
  getJob(jobId: string): Observable<Job> {
    const url = `${this.jobRootUrl}/${jobId}`;
    return this.http.get<Job>(url).pipe(
      tap((_) => this.log(`fetched job id = ${jobId}`)),
      catchError(this.handleError<Job>(`getJob id=${jobId}`))
    );
  }
  createjob(job: Job): Observable<Job> {
    return this.http.post<Job>(this.jobRootUrl, job, this.httpOptions).pipe(
      tap((newJob: Job) => this.log(`added job w/ id=${newJob.jobId}`)),
      catchError(this.handleError<Job>('Job'))
    );
  }
}
