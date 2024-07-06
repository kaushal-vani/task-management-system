import { Route } from '@angular/router';
import { AuthenticationPageComponent, HomePageComponent, TaskPageComponent } from '@task-tree-ui';

export const appRoutes: Route[] = [
  { path: 'authenticate', component: AuthenticationPageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'task', component: TaskPageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' },
];
