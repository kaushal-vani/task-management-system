import { Route } from '@angular/router';
import {
  AuthenticationPageComponent,
  HomePageComponent,
  ProfilePageComponent,
  TaskPageComponent,
} from '@task-tree-ui';

export const appRoutes: Route[] = [
  { path: 'authenticate', component: AuthenticationPageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'task', component: TaskPageComponent },
  { path: 'profile', component: ProfilePageComponent },
  { path: '', redirectTo: '/authenticate', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];
