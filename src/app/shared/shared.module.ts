import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpConfigInterceptor } from './service/http/httpconfig.interceptor';
import { ConfigurationService } from './service/http/configuration.service';
import { HttpService } from './service/http/http.service';
import { HelperService } from './service/helper.service';
import { HeaderComponent } from '../modules/common/header/header.component';
import { FooterComponent } from '../modules/common/footer/footer.component';
import { CommonRoutingModule } from '../modules/common/common-routing.module';



@NgModule({
  declarations: [
    // HeaderComponent,
    // FooterComponent
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CommonRoutingModule

  
  ],
  exports: [
    HeaderComponent,
    FooterComponent // Yeh line add karein taaki ye components baahar bhi use ho sakein
  ],
  providers: [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: HttpConfigInterceptor,
        multi: true
    },
    ConfigurationService,
    HttpService,
    HelperService
]
})
export class SharedModule { }
