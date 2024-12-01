import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRoutingModule } from './header-routing.module';
import { FindJobsComponent } from './find-jobs/find-jobs.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ScriptLoaderService } from 'src/assets/js/script-loader.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FindTalentsComponent } from './find-talents/find-talents.component';
import { AboutUsComponent } from './explore/about-us/about-us.component';
import { CompanyComponent } from './explore/company/company.component';
import { FAQSComponent } from './explore/faqs/faqs.component';
import { ContactUsComponent } from './explore/contact-us/contact-us.component';
import { BlogComponent } from './explore/blog/blog.component';
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
import { JobDetailsComponent } from './job-details/job-details.component';
import { CandidateProfileComponent } from './candidate-profile/candidate-profile.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';

@NgModule({
  declarations: [
    FindJobsComponent,
    FindTalentsComponent,
    AboutUsComponent,
    CompanyComponent,
    FAQSComponent,
    ContactUsComponent,
    BlogComponent,
    JobDetailsComponent,
    CandidateProfileComponent,
    BlogDetailsComponent,
    CompanyDetailsComponent
  ],
  imports: [
    CommonModule,
    HeaderRoutingModule,
    FormsModule,
    BrowserModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
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
  ],

  providers: [ScriptLoaderService],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HeaderModule { }
