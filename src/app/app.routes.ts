import { Routes } from "@angular/router";

import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Calendar } from './pages/calendar/calendar';

export const routes: Routes = [
  {
    path: '',
    component: Home
  }, //Main landing page path

  {
    path: 'login',
    component: Login
  }, //Login page pathing

  {
    path: 'register',
    component: Register
  }, //User register page pathing

  {
    path: 'calendar',
    component: Calendar
  }, //Main calendar app page routing

  {
    path: '**',
    redirectTo: ''
  } //redirects errors back to home page unsure if keep or change
];