import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import firebase from 'firebase/compat/app';
import { getFirestore } from 'firebase/firestore';

//stores the Firebase connection info
const firebaseConfig = {
  apiKey: "AIzaSyCqAyI-Kc1wVs0oh7GSBvApvQyyN9SJlms",
  authDomain: "student-planner-calendar.firebaseapp.com",
  projectId: "student-planner-calendar",
  storageBucket: "student-planner-calendar.firebasestorage.app",
  messagingSenderId: "257082706753",
  appId: "1:257082706753:web:f6f6c912d8d7b349522fc0"
};

const app = initializeApp(firebaseConfig);

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  //Makes firebase authentication open for the app
  auth = getAuth(app);
  
  //Gives the app access to the Firestore database
  firestore = getFirestore(app);
}
