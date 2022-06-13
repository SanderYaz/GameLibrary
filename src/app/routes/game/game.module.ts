import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {GameListComponent} from "./game-list/game-list.component";
import {GameCreateComponent} from "./game-create/game-create.component";
import {SharedModule} from "../../shared/shared.module";
import { GameCardComponent } from './game-card/game-card.component';


const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  {
    path: 'list',
    component: GameListComponent
  },
  {
    path: 'create',
    component: GameCreateComponent
  },
];

@NgModule({
  declarations: [
    GameListComponent,
    GameCreateComponent,
    GameCardComponent,
  ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(routes)
    ]
})
export class GameModule { }
