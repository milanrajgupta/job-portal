import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, data: { title: 'Dashboard' } },

  
  {
    path: 'common',
    loadChildren: () =>
      import('../common/common.module').then(
        (m) => m.CommonModuleModule
      ),
  },


   
  {
    path: 'header',
    loadChildren: () =>
      import('../header-module/header.module').then(
        (m) => m.HeaderModule
      ),
  },

  {
    path: 'profile',
    loadChildren: () =>
      import('../profile-module/profile.module').then(
        (m) => m.ProfileModule
      ),
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
