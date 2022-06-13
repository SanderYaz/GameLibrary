import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private games: any;

  constructor(private http: HttpClient) { }

  getGameList(): string | null  {
    if (JSON.parse(<string>localStorage.getItem('gameList')) === null)
      localStorage.setItem('gameList', '[]');
    return JSON.parse(<string>localStorage.getItem('gameList'));
  }

  deleteGame(selectedId: number) {
    this.games = this.getGameList();
    for (let [i, game] of this.games.entries()) {
      if (game.id === selectedId) {
        this.games.splice(i, 1);
      }
    }
    localStorage.setItem('gameList', JSON.stringify(this.games));
    this.games = [];
  }

  createGame(formGame: any) {
    this.games = this.getGameList();
    this.games.push(formGame.value);
    localStorage.setItem('gameList', JSON.stringify(this.games));
    this.games = [];
  }
}
