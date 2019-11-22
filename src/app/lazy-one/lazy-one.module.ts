import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyOneRoutingModule } from './lazy-one-routing.module';
import { LazyOneComponent } from './lazy-one.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [LazyOneComponent],
  imports: [
    CommonModule,
    SharedModule,
    LazyOneRoutingModule
  ]
})
export class LazyOneModule { }
