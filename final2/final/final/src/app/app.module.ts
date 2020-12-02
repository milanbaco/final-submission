import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeMenuComponent } from './home-menu/home-menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule, routes } from './app-routing/app-routing.module';
import { RouterModule, ROUTES } from '@angular/router';
import { AppMaterialModule } from '../app/app-material/app-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppFirebaseModule } from './app-firebase/app-firebase.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';

import { HttpClientModule } from '@angular/common/http';
import { PastgamesComponent } from './pastgames/pastgames.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeMenuComponent,
    DashboardComponent,
    LoginComponent,
    SignupComponent,
    ViewComponent,
    CreateComponent,
    PastgamesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    AppFirebaseModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
