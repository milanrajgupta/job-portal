import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileDashboardComponent } from './profile-dashboard/profile-dashboard.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { DeleteAccountComponent } from './delete-account/delete-account.component';
import { ProfileHeaderComponent } from './profile-header/profile-header.component';
import { ProfileSidebarComponent } from './profile-sidebar/profile-sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonRoutingModule } from '../common/common-routing.module';
import { ResumeComponent } from './resume/resume.component';
import { JobAlertComponent } from './job-alert/job-alert.component';
import { SavedJobComponent } from './saved-job/saved-job.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

@NgModule({
  declarations: [
    ProfileDashboardComponent,
    MyProfileComponent,
    DeleteAccountComponent,
    ProfileHeaderComponent,
    ProfileSidebarComponent,
    ResumeComponent,
    JobAlertComponent,
    SavedJobComponent,
    AccountSettingsComponent
  ],
  imports: [
    CommonModule,
    CommonRoutingModule,
    ProfileRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
    MatDialogModule,

  ]
})
export class ProfileModule { }
