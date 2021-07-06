import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import {SingupComponent} from './pages/singup/singup.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { AdminGuard } from './services/adminGuard/admin.guard';
import { UserGuard } from './services/userGuard/user.guard';

const routes: Routes = [
  {

    path:'',
    component:HomeComponent,
    pathMatch:'full',
  },

  {
    path:'signup',
    component: SingupComponent,
    pathMatch:'full',
  },

  {

    path:'login',
    component:LoginComponent,
    pathMatch:'full',
  },
  {
    path:'admin-dashboard',
    component:AdminDashboardComponent,
    canActivate:[AdminGuard],
    children:[
      {
        path:'profile',
        component:ProfileComponent,
      },
    ],
  },
  {
    path:'user-dashboard',
    component:UserDashboardComponent,
    pathMatch:'full',
    canActivate:[UserGuard],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
