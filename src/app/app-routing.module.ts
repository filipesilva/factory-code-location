import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{
  path: 'lazy-one', loadChildren: () => import('./lazy-one/lazy-one.module').then(m => m.LazyOneModule)
}, {
  path: 'lazy-two', loadChildren: () => import('./lazy-two/lazy-two.module').then(m => m.LazyTwoModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
