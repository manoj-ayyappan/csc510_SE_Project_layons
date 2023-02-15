import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CreateJobsComponent } from './create-jobs/create-jobs.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { SearchComponent } from './search/search.component';
import { JobPageComponent } from './job-page/job-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateJobsComponent,
    CreateProfileComponent,
    SearchComponent,
    JobPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
