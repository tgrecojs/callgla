import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { LocationsComponent } from './locations/locations.component';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { AreasOfLawComponent } from './areas-of-law/areas-of-law.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

const firebaseConfig = {
    apiKey: "AIzaSyANDGwybm4fM-8vWX6_xESS3T_8lobya1I",
    authDomain: "gla.firebaseapp.com",
    databaseURL: "https://gla.firebaseio.com",
    storageBucket: "firebase-gla.appspot.com",
    messagingSenderId: "733510829904"
};


const appRoutes: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'contact-us', component: ContactComponent },
  { path: 'about', component: AboutComponent},
  { path: 'our-locations', component: LocationsComponent},
  { path: 'areas-of-law', component: AreasOfLawComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    LocationsComponent,
    LocationsComponent,
    AreasOfLawComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    NgbModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBKGtZXmIrnrXgGUlm9tPhhydwzQpNIQPA'
    }),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
