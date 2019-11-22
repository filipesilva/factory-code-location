import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LazyOneComponent } from './lazy-one.component';

const routes: Routes = [{ path: '', component: LazyOneComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyOneRoutingModule { }
