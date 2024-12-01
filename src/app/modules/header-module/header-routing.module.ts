import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindJobsComponent } from './find-jobs/find-jobs.component';
import { JobDetailsComponent } from './job-details/job-details.component';

const routes: Routes = [
  
  { path: 'jobdetails', component: JobDetailsComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeaderRoutingModule { }
