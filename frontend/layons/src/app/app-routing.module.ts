import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { CreateJobsComponent } from './create-jobs/create-jobs.component';
import { JobPageComponent } from './job-page/job-page.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuard } from './utilities/auth.guard';
import { CreateProfileComponent } from './create-profile/create-profile.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'create', component: CreateJobsComponent, canActivate: [AuthGuard] },
  { path: 'search', component: SearchComponent, canActivate: [AuthGuard] },
  { path: 'job/:jobid', component: JobPageComponent, canActivate: [AuthGuard] },
  { path: 'createprofile', component: CreateProfileComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
