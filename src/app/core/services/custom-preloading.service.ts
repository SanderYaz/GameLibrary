import { Injectable } from '@angular/core';
import {delay, Observable, of, switchMap} from "rxjs";
import {PreloadingStrategy, Route} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class CustomPreloadingService implements PreloadingStrategy {

  preload(route: Route, load: () => Observable<any>): Observable<any> {
    return of(true).pipe(delay(4000), switchMap(() => load()));
  }
}
