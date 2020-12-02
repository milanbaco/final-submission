import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Game } from '../models/game';



@Injectable({
  providedIn: 'root'
})
export class DataService {


  //object: BehaviourSubject<Object>;


  //apiURL = "https://localhost:44308/api";
  apiURL = "http://finalchallenge-env.eba-p9ep4jvw.us-east-1.elasticbeanstalk.com/api";


  constructor(private http: HttpClient) { }



 //post object
  createGame(game) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiURL + "/games/creategame", game).subscribe(
        res => {
          console.log(res);
          resolve(res);
        },
        err => {
          console.log(err);
          reject(err);
        });
    });
  }


  //get objects
  getGames() {
    return new Promise((resolve, reject) => {
      this.http.get<Game>(this.apiURL + "/games/futuregames").subscribe(
        res => {
          console.log(res);
          resolve(res);
        },
        err => {
          console.log(err);
          reject(err);
        });
    });
  }

  getPastGames() {
    return new Promise((resolve, reject) => {
      this.http.get<Game>(this.apiURL + "/games/getpastgames").subscribe(
        res => {
          console.log(res);
          resolve(res);
        },
        err => {
          console.log(err);
          reject(err);
        });
    });
  }


  //PUT method

  updateGame(game) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiURL + "/games/updategame", game).subscribe(
        res => {
          console.log(res);
          resolve(res);
        },
        err => {
          console.log(err);
          reject(err);
        });
    });
  }

  deleteGame(gameId) {
    return new Promise((resolve, reject) => {
      this.http.delete(this.apiURL + "/games/deletegame?gameId=" + gameId).subscribe(
        res => {
          console.log(res);
          resolve(res);
        },
        err => {
          console.log(err);
          reject(err);
        });
    });
  }


}
