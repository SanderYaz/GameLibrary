import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomPreloadingService} from "./core/services/custom-preloading.service";
import {GameListComponent} from "./routes/game/game-list/game-list.component";

const routes: Routes = [
  {
    path: '',
    component: GameListComponent,
    children: [
      { path: '', redirectTo: 'game', pathMatch: 'full' },
      {
        path: 'game',
        loadChildren: () => import('./routes/game/game.module').then(m => m.GameModule)
      },
    ],
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
        scrollPositionRestoration: 'top',
        preloadingStrategy: CustomPreloadingService
      }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
