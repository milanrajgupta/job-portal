import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindJobsComponent } from '../header-module/find-jobs/find-jobs.component';
import { FindTalentsComponent } from '../header-module/find-talents/find-talents.component';
import { AboutUsComponent } from '../header-module/explore/about-us/about-us.component';
import { ProfileDashboardComponent } from '../profile-module/profile-dashboard/profile-dashboard.component';
import { CompanyComponent } from '../header-module/explore/company/company.component';
import { FAQSComponent } from '../header-module/explore/faqs/faqs.component';
import { ContactUsComponent } from '../header-module/explore/contact-us/contact-us.component';
import { BlogComponent } from '../header-module/explore/blog/blog.component';
import { MyProfileComponent } from '../profile-module/my-profile/my-profile.component';
import { JobDetailsComponent } from '../header-module/job-details/job-details.component';
import { RegistrationComponent } from '../account-module/registration/registration.component';
import { CandidateProfileComponent } from '../header-module/candidate-profile/candidate-profile.component';
import { BlogDetailsComponent } from '../header-module/blog-details/blog-details.component';
import { CompanyDetailsComponent } from '../header-module/company-details/company-details.component';
import { AccountSettingsComponent } from '../profile-module/account-settings/account-settings.component';
import { JobAlertComponent } from '../profile-module/job-alert/job-alert.component';
import { ResumeComponent } from '../profile-module/resume/resume.component';
import { SavedJobComponent } from '../profile-module/saved-job/saved-job.component';

const routes: Routes = [
  { path: 'findJob', component: FindJobsComponent },
  { path: 'findTalents', component: FindTalentsComponent },
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'ProfileDashboard', component: ProfileDashboardComponent },
  { path: 'company', component: CompanyComponent },
  { path: 'faq', component: FAQSComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'myProfile', component: MyProfileComponent },
  { path: 'jobdetails', component: JobDetailsComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'candidateProfile', component: CandidateProfileComponent },
  { path: 'blogDetails', component: BlogDetailsComponent },
  { path: 'companyDetails', component: CompanyDetailsComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'jobAlert', component: JobAlertComponent },
  { path: 'savedJob', component: SavedJobComponent },
  { path: 'accountSettings', component: AccountSettingsComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommonRoutingModule { }
