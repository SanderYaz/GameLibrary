import {Component, OnInit} from '@angular/core';
import {GameService} from "../../../core/services/game.service";

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {
  gameList!: any;
  gameListFiltered!: any;
  searchText: any;
  constructor(private gameService : GameService) { }

  ngOnInit(): void {
    this.getGameList();
  }
  ngOnChanges() {
    this.getGameList();
  }
  getGameList() {
    this.gameList = this.gameService.getGameList();
    this.gameListFiltered = this.gameList;
  }
  onSearch() {
    const all = this.gameList.filter((obj: any) => {
      return obj.name.includes(this.searchText);
    });
    this.gameListFiltered = all;
  }
}
