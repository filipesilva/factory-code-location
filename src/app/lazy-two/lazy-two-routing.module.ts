import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LazyTwoComponent } from './lazy-two.component';

const routes: Routes = [{ path: '', component: LazyTwoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyTwoRoutingModule { }
