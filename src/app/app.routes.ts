import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'intro', pathMatch: 'full' },
  { path: 'intro', loadComponent: () => import('./structure/intro/intro.component').then(m => m.IntroComponent) },
  {
    path: 'combinational-operators/combine-latest',
    loadComponent: () => import('./structure/combinational-operators/combine-latest/combine-latest.component')
      .then((c) => c.CombineLatestComponent)
  },
  {
    path: 'combinational-operators/concat',
    loadComponent: () => import('./structure/combinational-operators/concat/concat.component')
      .then((c) => c.ConcatComponent)
  }
];
