import { Route } from '@angular/router';
import { AuthenticationPageComponent, HomePageComponent, PageNotFoundComponent, ProfilePageComponent, TaskPageComponent } from '@task-tree-ui';

export const appRoutes: Route[] = [
  { path: 'authenticate', component: AuthenticationPageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'task', component: TaskPageComponent },
  { path: 'profile', component: ProfilePageComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: '', redirectTo: '/authenticate', pathMatch: 'full' },
  { path: '**', redirectTo: '/404' },
];
