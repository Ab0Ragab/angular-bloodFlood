import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BloodDonationFormComponent } from './blood-donation-form/blood-donation-form.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { ReadMoreComponent } from './read-more/read-more.component';
import { FooterComponent } from './footer/footer.component';
import { AuthComponent } from './auth/auth.component';
import { AlertComponent } from './shared/alert/alert.component';
import { SpinerLodingComponent } from './shared/spiner-loding/spiner-loding.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BloodDonationFormComponent,
    BenefitsComponent,
    ReadMoreComponent,
    FooterComponent,
    AuthComponent,
    AlertComponent,
    SpinerLodingComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    FormsModule,
    NgbModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
