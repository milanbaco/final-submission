import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { BehaviorSubject, Observable, from } from 'rxjs';
import { Injectable } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { User } from '../models/user';
import * as firebase1 from 'firebase/app';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  public signedIn: Observable<any>;
  user: Observable<User>;


  private fbUser: BehaviorSubject<
    Observable<firebase.User>> = new BehaviorSubject<Observable<firebase.User>>(null);
    user$ = this.fbUser
    .asObservable()
    .pipe(switchMap((user: Observable<firebase.User>) => user));

  constructor(private afAuth: AngularFireAuth, public fs: AngularFirestore, public auth: AngularFireAuth, private router: Router) {
    this.fbUser.next(this.afAuth.authState);
  }

  loginViaGoogle(): Observable<auth.UserCredential> {
    return from(this.afAuth.signInWithPopup(new auth.GoogleAuthProvider()));
  }

  logout(): Observable<void> {
    return from(this.afAuth.signOut());
  }

  getManager(){
    var manager = false;
  var user = firebase1.auth().currentUser.email;
  if (user == 'milan.bacovic101@gmail.com'){
    manager = true;
    console.log(user)
    console.log(manager)
  }
  else if (user != 'milan.bacovic101@gmail.com'){
    manager = false;
  console.log(user)
  console.log(manager)
  }
  return manager;

  }

  async signIn(email: string, password: string) {
    try {
        if (!email || !password) throw new Error('Invalid email and/or password');
        await this.auth.signInWithEmailAndPassword(email, password);
        return true;
    } catch (error) {
        console.log('Sign in failed', error);
        return false;
    }
}


async signOut() {
    try {
        await this.auth.signOut();
        this.router.navigate([ 'login' ]);
        return true;
    } catch (error) {
        console.log('Sign out failed', error);
        return false;
    }
}

signupUser(user: User) {

  this.auth.createUserWithEmailAndPassword(user.email, user.password)
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    });
}

}