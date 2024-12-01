import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileDashboardComponent } from './profile-dashboard/profile-dashboard.component';
import { MyProfileComponent } from './my-profile/my-profile.component';

const routes: Routes = [
  { path: 'profileDashboard', component: ProfileDashboardComponent },
  // { path: 'myProfile', component: MyProfileComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
