import { Routes } from '@angular/router';
import { ListDirectorsComponent } from './features/directors/components/list-directors/list-directors.component';
import { ListFilmsComponent } from './features/films/components/list-films/list-films.component';

export const routes: Routes = [
  {
    path: 'directors',
    component: ListDirectorsComponent,
  },
  {
    path: 'films',
    component: ListFilmsComponent,
  }
];
