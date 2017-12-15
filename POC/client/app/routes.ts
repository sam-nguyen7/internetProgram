import {Routes} from '@angular/router'
import {LoginComponent} from './components/user/login.component'
import {ProfileComponent} from './components/user/profile.component'
import {RegisterComponent} from './components/user/register.component'
import {destinationComponent} from './components/user/destination.component'

export const appRoutes = [
    { path: 'login', component: LoginComponent },
    { path: 'user/:uid',component: ProfileComponent },
    {path: 'register', component: RegisterComponent},
    {path: 'destination', component: destinationComponent},
    { path: '',redirectTo: '/login',pathMatch: 'full'},
  ]