import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingpageComponent } from './pages/bookingpage/bookingpage.component';
import { BooknowComponent } from './pages/booknow/booknow.component';
import { DiscoverComponent } from './pages/discover/discover.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'booknow',component:BooknowComponent},
  {path:'booking/:id',component:BookingpageComponent},
  {path:'Discover',component:DiscoverComponent},
  {path:'',redirectTo:'login', pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
