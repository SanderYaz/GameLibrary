import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
import {GameService} from "../../../core/services/game.service";
import {NzNotificationService} from "ng-zorro-antd/notification";

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

  constructor(
    private notificationService: NzNotificationService,
    private gameService : GameService) { }

  ngOnInit(): void {
  }

  deleteGame(deleteId: number) {
    this.gameService.deleteGame(deleteId);
    this.notificationService.success('Success!', 'Game Deleted Successfully!');
    this.pageMetadataChanged.emit();
  };
}
