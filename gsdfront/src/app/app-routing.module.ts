import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UpdateRemedyComponent } from './pages/admin/update-remedy/update-remedy.component';
import { ViewComplainsComponent } from './pages/admin/view-complains/view-complains.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AddComplainComponent } from './pages/user/add-complain/add-complain.component';
import { UpdateRemedyUserComponent } from './pages/user/update-remedy-user/update-remedy-user.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { UserWelcomeComponent } from './pages/user/user-welcome/user-welcome.component';
import { ViewComplainComponent } from './pages/user/view-complain/view-complain.component';
import { AdminGuard } from './services/admin.guard';
import { NormalGuard } from './services/normal.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',

  },
  {
    path: 'signup',
    component: SignupComponent,
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'admin',
    component: DashboardComponent,
    canActivate: [AdminGuard],  
    children:[
      {
        path:'',
        component: WelcomeComponent,
      },
      {
        path:'profile',
        component: ProfileComponent,
      },
      {
        path:'complains',
        component: ViewComplainsComponent,
      },
      {
        path:'remedy/:rid',
        component: UpdateRemedyComponent,
      },
    ],
  },
  {
    path: 'user-dashboard',
    component: UserDashboardComponent,
    canActivate: [NormalGuard], 
    children:[
      {
        path:'',
        component: UserWelcomeComponent,
      },
      {
        path:'profile',
        component: ProfileComponent,
      },
      {
        path:'add-complain',
        component: AddComplainComponent,
      },
      {
        path: 'view-complain',
        component: ViewComplainComponent,
      },
      {
        path:'remedy/:rid',
        component: UpdateRemedyUserComponent,
      },
    ],

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
