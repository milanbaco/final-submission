import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { DataService } from '../core/data.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private _location: Location, private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
  }

  //create form model for posting object

  createGame(form){
    let newGame = {
      gameDate: form.value['gamedate'],
      courtNo: form.value ['courtno'],
      venue: form.value['venue'],
    }

    console.log(newGame);

    this.dataService.createGame(newGame).then(() => {
      console.log("Game created");
      alert("Game created");
      this.router.navigate(['home']);
    }).catch(() => {
      console.error("error");
    }).finally(() => {
      console.log("Game created");
    });
  }

  goBack(){
    this._location.back();
  }

  //post method for model
 

}
