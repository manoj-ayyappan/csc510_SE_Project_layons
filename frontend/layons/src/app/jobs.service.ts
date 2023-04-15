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
  kaam = [];
  private jobRootUrl = 'http://localhost:3000/jobs';
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
  getAllSearchObjects(): Observable<SearchObject[]> {
    const url = `${this.jobRootUrl}/search`;
    console.log('trying to get: ', url);
    // return of([
    //   { title: 'SDE 1', jobId: 1 },
    //   { title: 'SDE 2', jobId: 2 },
    // ]);
    return this.http.get<SearchObject[]>(url).pipe(
      tap((_) => {
        console.log(_);
      }),
      catchError(this.handleError<SearchObject[]>(`Error getting all jobs`))
    );
  }
  createjob(job: Job): Observable<Job> {
    // debug here
    console.log(job);
    return this.http.post<Job>(this.jobRootUrl, job, this.httpOptions).pipe(
      tap((newJob: Job) => this.log(`added job w/ id=${newJob.jobId}`)),
      catchError(this.handleError<Job>('Job'))
    );
  }
}
