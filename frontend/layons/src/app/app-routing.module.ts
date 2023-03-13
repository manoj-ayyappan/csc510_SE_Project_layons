import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { CreateJobsComponent } from './create-jobs/create-jobs.component';
import { JobPageComponent } from './job-page/job-page.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'create', component: CreateJobsComponent },
  { path: 'search', component: SearchComponent },
  { path: 'job/:jobid', component: JobPageComponent },
  { path: 'create_profile', component: CreateProfileComponent},
  { path: 'profile', component: ProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
