import { Component } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CSA-app';
  constructor(public afAuth: AngularFireAuth) {}

  login() {
    firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
  }

  logout() {
    firebase.auth().signOut();
  }
}
