import { Injectable, OnInit } from '@angular/core';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Job } from './job';
import { SearchObject } from './searchobject';

@Injectable({
  providedIn: 'root',
})
export class JobsService {
  private jobRootUrl = 'http://localhost:3000/jobs';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  private log(message: string) {
    console.log(`JobsService: ${message}`);
  }
  constructor(private http: HttpClient) {}

  // handles errors
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  // function to retrieve a specific job by jobid
  getJob(jobId: string): Observable<Job> {
    const url = `${this.jobRootUrl}/${jobId}`;
    return this.http.get<Job>(url).pipe(
      tap((_) => this.log(`fetched job id = ${jobId}`)),
      catchError(this.handleError<Job>(`getJob id=${jobId}`))
    );
  }

  // function to retrieve all search objects
  getAllSearchObjects(): Observable<SearchObject[]> {
    const url = `${this.jobRootUrl}/search`;
    return this.http.get<SearchObject[]>(url).pipe(
      catchError(this.handleError<SearchObject[]>(`Error getting all jobs`))
    );
  }

  // function to create a job
  createjob(job: Job): Observable<Job> {
    return this.http.post<Job>(this.jobRootUrl, job, this.httpOptions).pipe(
      tap((newJob: Job) => this.log(`added job w/ id=${newJob.jobId}`)),
      catchError(this.handleError<Job>('Job'))
    );
  }
}
