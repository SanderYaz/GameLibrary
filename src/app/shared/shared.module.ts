// 3rd Party ::: NG-Zorro Module
import { NzButtonModule } from 'ng-zorro-antd/button';

import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";

const NGZORROMODULS = [
  NzButtonModule
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
