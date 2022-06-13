import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {GameListComponent} from "./game-list/game-list.component";
import {GameCreateComponent} from "./game-create/game-create.component";
import {SharedModule} from "../../shared/shared.module";
import { GameCardComponent } from './game-card/game-card.component';
import {NzUploadModule} from "ng-zorro-antd/upload";
import {NzGridModule} from "ng-zorro-antd/grid";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzModalModule} from "ng-zorro-antd/modal";


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
        RouterModule.forChild(routes),
        NzUploadModule,
        NzGridModule,
        NzFormModule,
        NzInputModule,
        NzModalModule
    ]
})
export class GameModule { }
