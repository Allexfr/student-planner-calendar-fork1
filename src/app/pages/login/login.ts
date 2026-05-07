import { Component } from '@angular/core';
import { RouterLink, Router } from "@angular/router";
import { CommonModule, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { FirebaseService } from '../../services/firebase';


@Component({
  selector: 'app-login',
  imports: [RouterLink, FormsModule, RouterLink, NgIf],
  templateUrl: './login.html',
  styleUrl: './login.css',
})

//Stores the login form email/password input of the user (also stores firebase error messages)
export class Login {
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  

  constructor(
    private firebaseService: FirebaseService,
    private router: Router
  ) {}

  //signs in a user with an existing account
  async loginUser(): Promise<void> {

    try {
      await signInWithEmailAndPassword(
        this.firebaseService.auth,
        this.email,
        this.password
      );

      //sends the signed in user to the calender landing page
      this.router.navigate(['/calendar']);

    } catch (error: any) {
      this.errorMessage = error.message;
    }
  }
}
