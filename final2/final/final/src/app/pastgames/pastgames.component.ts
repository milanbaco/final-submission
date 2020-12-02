import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/data.service';
import { Game } from '../models/game';

@Component({
  selector: 'app-pastgames',
  templateUrl: './pastgames.component.html',
  styleUrls: ['./pastgames.component.css']
})
export class PastgamesComponent implements OnInit {

  games: Game[];
  gameNumber: number;
  game: Game;

  constructor(private _location: Location, private dataService: DataService) { }

  ngOnInit(): void {
    this.getPastGames();
  }

  getPastGames(){
    this.dataService.getPastGames().then((res: Game[]) => {
      this.games = res;
      console.log("Games retrieved");
    }).catch(() => {
      console.error("Error");
    });
  }

  goBack(){
    this._location.back();
  }

  updateGame(form){
    this.game = this.games.find(g => g.gameId == form.value['gameId']);

    let updateGame: Game = {
      gameId: form.value['gameId'],
      gameDate: this.game.gameDate,
      courtNo: this.game.courtNo,
      userId: form.value['userId'],
      fee: form.value['fee'],
      venue: this.game.venue,
    }
    console.log(updateGame);
    this.dataService.updateGame(updateGame).then(() => {
      console.log("Game Updated");
      alert("Updated");
      this.getPastGames();
    }).catch(() => {
      console.error("Update failed");
    });
  }

}
