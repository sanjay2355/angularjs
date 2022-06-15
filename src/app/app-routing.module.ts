import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppTypeBusinessComponent } from './app-type-business/app-type-business.component';
import { AppHomeComponent } from './app-home/app-home.component';

const routes: Routes = [
  { path: 'type/business', component: AppTypeBusinessComponent },
  { path: '', component: AppHomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
