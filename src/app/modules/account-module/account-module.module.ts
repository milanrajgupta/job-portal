import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountModuleRoutingModule } from './account-module-routing.module';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ScriptLoaderService } from 'src/assets/js/script-loader.service';



@NgModule({
  declarations: [
    // RegistrationComponent,
    // LoginComponent,
    // ForgotPasswordComponent,
  ],
  imports: [
    CommonModule,
    AccountModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  providers: [ScriptLoaderService],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AccountModuleModule { }
