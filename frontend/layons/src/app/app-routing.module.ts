import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { CreateJobsComponent } from './create-jobs/create-jobs.component';
import { JobPageComponent } from './job-page/job-page.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { ProfileComponent } from './profile/profile.component';
import { LogoutComponent } from './logout/logout.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'create', component: CreateJobsComponent },
  { path: 'search', component: SearchComponent },
  { path: 'job/:jobid', component: JobPageComponent },
  { path: 'create_profile', component: CreateProfileComponent},
  { path: 'profile', component: ProfileComponent},
  {path: 'edit_profile', component: EditProfileComponent},
  {path: 'logout', component: LogoutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
