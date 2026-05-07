import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { FirebaseService } from '../../services/firebase';


@Component({
  selector: 'app-calendar',
  imports: [],
  templateUrl: './calendar.html',
  styleUrl: './calendar.css',
})

//gives the calendar page access to teh Firebase user login data
export class Calendar {
  constructor(
    public firebaseService: FirebaseService,
    private router:  Router
  ) {}

  //Logs the user out and returns to home page
  async logout(): Promise<void>{
    await this.firebaseService.logoutUser();

    this.router.navigate(['/']);
  }
}
