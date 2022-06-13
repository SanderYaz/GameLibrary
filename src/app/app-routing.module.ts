import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomPreloadingService} from "./core/services/custom-preloading.service";
import {LayoutDefaultComponent} from "./layout/layout-default/layout-default.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutDefaultComponent,
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
