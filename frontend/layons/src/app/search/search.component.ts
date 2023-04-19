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

//Implement search functionality, input data from textbox and search display the results
export class SearchComponent implements OnInit {

  // initializes the search functionality
  queryControl = new FormControl('');
  options: Fuzzysort.KeysOptions<SearchObject> = {
    limit: 20,
    threshold: -40000,
    keys: ['title'],
  };

  // initializes the job objects
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

  // handles on click logout for navbar
  onLogout(){
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

  // handles on click profile for navbar
  onClickProfile(){
    this.router.navigateByUrl('/profile')
  }

  // handles on click create jobs for profile
  onClickCreateJobs(){
    this.router.navigateByUrl('/create')
  }

  
  ngOnInit() {
    this.jobsservice.getAllSearchObjects().subscribe((jobsList) => {
      this.jobsList = jobsList;
    });
  }

  //handles on click search
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
