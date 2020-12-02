import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { DataService } from '../core/data.service';
import { Game } from '../models/game';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  games: Game;
  gameId: number;
  constructor(private _location: Location, private dataService: DataService) { }

  ngOnInit(): void {
    this.getGames();
  }

  
  goBack(){
    this._location.back();
  }

  //get method for model
  getGames(){
    this.dataService.getGames().then((res: Game) => {
      this.games = res;
      console.log("Games retrieved");
    }).catch(() => {
      console.error("Retrieving games failed");
    })
  }

  deleteGame() {
    console.log(this.gameId);
    this.dataService.deleteGame(this.gameId).then(() => {
      console.log("Game Deleted");
      alert("Game Deleted Successfully")
      this.getGames();
    }).catch(() => {
      console.error("Delete Failed");
    }).finally(() => {
      console.log("Delete Finalized");
    });

  }


  //delete method for model

}
