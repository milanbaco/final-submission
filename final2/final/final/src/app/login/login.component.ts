import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import {AuthService} from '../core/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public signInForm: FormGroup;
    public signInFailed: boolean;
    public userAuth: Subscription;

  constructor(public fb: FormBuilder, public authService: AuthService, public router: Router) { 
    this.signInFailed = false;
        this.signInForm = this.fb.group({
            email: new FormControl('', [ Validators.required, Validators.email ]),
            password: new FormControl('', [ Validators.required, Validators.minLength(6) ])
        });
  }

  ngOnInit(): void {
  }
  
  async signIn(fg: FormGroup) {
    try {
        this.signInFailed = false;
        if (!fg.valid) throw new Error('Invalid sign-in credentials');
        const result = await this.authService.signIn(fg.value.email, fg.value.password);
        console.log('Logged in = ', result);
        if (result) this.router.navigate([ 'home' ]);
        else throw new Error('Sign-in failed');
    } catch (error) {
        console.log(error);
        this.signInFailed = true;
    }
}

}
