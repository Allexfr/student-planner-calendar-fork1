import { Component } from '@angular/core';
import { RouterLink, Router } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { FirebaseService } from '../../services/firebase';
import { CommonModule } from '@angular/common'; //allows *ngIf to be used


@Component({
  selector: 'app-register',
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})

 // stores user info like email and password
export class Register {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

//creates firebase account
  constructor(
    private firebaseService: FirebaseService,
    private router: Router
  ) {}

//sends user to the calendar landing page once they create their account
  async registerUser(): Promise<void> {

    try{
      await createUserWithEmailAndPassword(
        this.firebaseService.auth,
        this.email,
        this.password
      );

      this.router.navigate(['/calendar']);
    } catch(error: any) {
      this.errorMessage = error.message;
    }
  }
}
