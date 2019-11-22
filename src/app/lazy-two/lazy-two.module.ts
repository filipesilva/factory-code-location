import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyTwoRoutingModule } from './lazy-two-routing.module';
import { LazyTwoComponent } from './lazy-two.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [LazyTwoComponent],
  imports: [
    CommonModule,
    SharedModule,
    LazyTwoRoutingModule
  ]
})
export class LazyTwoModule { }
