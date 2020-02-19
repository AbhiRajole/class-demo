import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/admin/login/login.component';
import { SignupComponent } from './component/admin/signup/signup.component';
import { CourseListComponent } from './component/course-list/course-list.component';
import { CourseDetailsComponent } from './component/course-details/course-details.component';
import { CourseEditComponent } from './component/course-edit/course-edit.component';
import { HeaderComponent } from './component/header/header.component';


const routes: Routes = [
  { path : 'login', component : LoginComponent},
  { path : 'home', component : HomeComponent},
  { path :'signup', component : SignupComponent},
  { path : 'course/list', component : CourseListComponent},
  { path : 'course/details', component : CourseDetailsComponent },
  { path : 'course/edit', component : CourseEditComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
