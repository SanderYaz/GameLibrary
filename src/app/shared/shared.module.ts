// 3rd Party ::: NG-Zorro Module
import { NzCardModule } from 'ng-zorro-antd/card';
import {NzMenuModule} from "ng-zorro-antd/menu";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {NzSelectModule} from "ng-zorro-antd/select";
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzButtonModule} from "ng-zorro-antd/button";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";

const NGZORROMODULS = [
  NzButtonModule,
  NzLayoutModule,
  NzSelectModule,
  NzDividerModule,
  NzIconModule,
  NzMenuModule,
  NzCardModule
]

const THIRDMODULES = [
  ...NGZORROMODULS,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    // third libs
    ...THIRDMODULES,
  ],
  entryComponents: [],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    // third libs
    ...THIRDMODULES,
  ]
})
export class SharedModule { }
