import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';

import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

// imported Firebase info above and angular router setup

//below is the firebase project connection info
const firebaseConfig = {
  apiKey: "AIzaSyCqAyI-Kc1wVs0oh7GSBvApvQyyN9SJlms",
  authDomain: "student-planner-calendar.firebaseapp.com",
  projectId: "student-planner-calendar",
  storageBucket: "student-planner-calendar.firebasestorage.app",
  messagingSenderId: "257082706753",
  appId: "1:257082706753:web:f6f6c912d8d7b349522fc0"
};

export const appConfig: ApplicationConfig = {
  providers: [
  provideBrowserGlobalErrorListeners(),

  provideRouter(routes),
]
};
