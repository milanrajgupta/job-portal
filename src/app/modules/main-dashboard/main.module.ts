import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScriptLoaderService } from 'src/assets/js/script-loader.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from '../common/header/header.component';
import { FooterComponent } from '../common/footer/footer.component';
import { CommonComponent } from '../common/common.component';
import { CategoryComponent } from './category/category.component';
import { CarouselSliderComponent } from './carousel-slider/carousel-slider.component';
import { TrendingSliderComponent } from './trending-slider/trending-slider.component';
import { HowItsWorkComponent } from './how-its-work/how-its-work.component';
import { JobCategoriesComponent } from './job-categories/job-categories.component';
import { JobListingComponent } from './job-listing/job-listing.component';
import { OurBlogComponent } from './our-blog/our-blog.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    DashboardComponent,
    CategoryComponent,
    CarouselSliderComponent,
    TrendingSliderComponent,
    HowItsWorkComponent,
    JobCategoriesComponent,
    JobListingComponent,
    OurBlogComponent,
  
    CommonComponent,

  ],
  imports: [
    CommonModule,
    MainRoutingModule,
     HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [ScriptLoaderService],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MainModule { }
