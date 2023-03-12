import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import fuzzysort from 'fuzzysort';

import { JobsService } from '../jobs.service';
import { Job } from '../job';
import { SearchObject } from '../searchobject';

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
  constructor(private jobsservice: JobsService) {}
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
  ngOnInit() {
    this.jobsservice.getAlljobs().subscribe((jobsList) => {
      this.jobsList = jobsList;
    });
    this.queryControl.valueChanges.subscribe((selectedValue) => {
      if (selectedValue == null) return;
      this.doSearch(selectedValue);
    });
  }
}
