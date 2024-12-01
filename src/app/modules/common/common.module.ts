import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonRoutingModule } from './common-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { CommonComponent } from './common.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
   
  ],
  imports: [
    CommonModule,
    CommonRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class CommonModuleModule { }
