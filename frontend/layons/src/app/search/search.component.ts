import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import fuzzysort from 'fuzzysort';
import { AuthService } from '../auth.service';
import { JobsService } from '../jobs.service';
import { Job } from '../job';
import { SearchObject } from '../searchobject';
import { ProfileComponent } from '../profile/profile.component';
import { Router,Routes } from '@angular/router';
import { CreateJobsComponent } from '../create-jobs/create-jobs.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  /*Implement search functionality, input data from textbox and search display the results*/
  queryControl = new FormControl('');
  options: Fuzzysort.KeysOptions<SearchObject> = {
    limit: 20,
    threshold: -40000,
    keys: ['title'],
  };
  jobsList: SearchObject[] = [];
  jobURLs: string[] = [];
  searchResults: Fuzzysort.KeysResults<SearchObject> | null = null;
  hlIndices: ReadonlyArray<Number>[] = [];
  constructor(private jobsservice: JobsService, private authService: AuthService, private router: Router) {}
  doSearch(selectedValue: string) {
    this.searchResults = fuzzysort.go<SearchObject>(
      selectedValue,
      this.jobsList,
      this.options
    );
    this.hlIndices = this.searchResults.map((el) => {
      let r: Fuzzysort.Result = el[0] as Fuzzysort.Result;
      return fuzzysort.indexes(r);
    });
    this.jobURLs = this.searchResults.map((el) => {
      return `http://localhost:4200/job/${el.obj.jobId}`;
    });
  }
  onLogout(){
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
  onClickProfile(){
    this.router.navigateByUrl('/profile')
  }
  onClickCreateJobs(){
    this.router.navigateByUrl('/create')
  }
  ngOnInit() {
    this.jobsservice.getAllSearchObjects().subscribe((jobsList) => {
      this.jobsList = jobsList;
    });
    // this.queryControl.valueChanges.subscribe((selectedValue) => {
    //   if (selectedValue == null) return;
    //   this.doSearch(selectedValue);
    // });
  }
  onSearch() {
    let query:string = "";
    if (this.queryControl.value != null) {
      query = this.queryControl.value;
    }
    if (this.queryControl.value == "") {
      alert("Please enter a job");
      return;
    }
    this.doSearch(query);
  }
}
