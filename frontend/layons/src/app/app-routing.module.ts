import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { CreateJobsComponent } from './create-jobs/create-jobs.component';
import { JobPageComponent } from './job-page/job-page.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuard } from './utilities/auth.guard';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { __importDefault } from "tslib";

// defines routes between components
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'create', component: CreateJobsComponent, canActivate: [AuthGuard] },
  { path: 'search', component: SearchComponent, canActivate: [AuthGuard] },
  { path: 'job/:jobid', component: JobPageComponent, canActivate: [AuthGuard] },
  { path: 'createprofile', component: CreateProfileComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  { path: 'edit_profile', component: EditProfileComponent, canActivate: [AuthGuard]},
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
