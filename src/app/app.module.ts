import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseListComponent } from './component/course-list/course-list.component';
import { CourseDetailsComponent } from './component/course-details/course-details.component';
import { AdminComponent } from './component/admin/admin.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { CourseEditComponent } from './component/course-edit/course-edit.component';
import { StarComponent } from './component/shared/star/star.component';
import { LoginComponent } from './component/admin/login/login.component';
import { SignupComponent } from './component/admin/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    CourseDetailsComponent,
    AdminComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    CourseEditComponent,
    StarComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
