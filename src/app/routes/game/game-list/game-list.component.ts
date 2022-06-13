import {Component, OnInit} from '@angular/core';
import {GameService} from "../../../core/services/game.service";

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {
  gameList!: any;
  constructor(private gameService : GameService) { }

  ngOnInit(): void {
    this.getGameList();
  }
  ngOnChanges() {
    this.getGameList();
  }
  getGameList() {
    this.gameList = this.gameService.getGameList();
  }

}
