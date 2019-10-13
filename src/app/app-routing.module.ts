import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BloodDonationFormComponent } from './blood-donation-form/blood-donation-form.component';
import { ReadMoreComponent } from './read-more/read-more.component';
import { AuthGuard } from './auth/auth-guard';
import { AuthComponent } from './auth/auth.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'donate', component: BloodDonationFormComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'readMore', component: ReadMoreComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
