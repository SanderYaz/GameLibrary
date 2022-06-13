import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
import {GameService} from "../../../core/services/game.service";

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent implements OnInit {
  @Input() cardName: any;
  @Input() bundleName: any;
  @Input() ownerName: any;
  @Input() image: any;
  @Input() selectedId: any;
  @Output() pageMetadataChanged = new EventEmitter<any>();

  constructor(private gameService : GameService) { }

  ngOnInit(): void {
  }

  deleteGame(deleteId: number) {
    this.gameService.deleteGame(deleteId);
    this.pageMetadataChanged.emit();
  };
}
