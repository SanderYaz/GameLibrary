import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutDefaultComponent } from './layout-default/layout-default.component';
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    LayoutDefaultComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class LayoutModule { }
