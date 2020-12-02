import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { catchError, take } from 'rxjs/operators';
import { EMPTY, Observable, of } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { routes } from '../app-routing/app-routing.module'

@Component({
  selector: 'app-home-menu',
  templateUrl: './home-menu.component.html',
  styleUrls: ['./home-menu.component.css', '../bootstrap.css']
})
export class HomeMenuComponent implements OnInit {

  isAuth: boolean;

  constructor(
    private readonly auth: AuthService,
    private readonly snackBar: MatSnackBar,
    private readonly router: Router,
  ) { }

  ngOnInit(): void {

      if(this.auth.getManager() == true){
        this.isAuth = true;
      }
      else{
        this.isAuth = false;
      }

  }

  createX(){
    console.log("hello");
    }

  logout() {
    this.auth
      .logout()
      .pipe(take(1))
      .subscribe((response) => {
        this.router.navigate(['/login']);
        this.snackBar.open('Logged out', 'Close', {
          duration: 4000,
        });
      });
  }





}
