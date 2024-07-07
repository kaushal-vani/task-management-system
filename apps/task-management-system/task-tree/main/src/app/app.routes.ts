import { Route } from '@angular/router';
import { AuthenticationPageComponent, HomePageComponent, PageNotFoundComponent, ProfilePageComponent, StatPageComponent, TaskPageComponent } from '@task-tree-ui';

export const appRoutes: Route[] = [
  { path: '', redirectTo: '/authenticate', pathMatch: 'full' },
  { path: '**', redirectTo: '/404' },
  { path: '404', component: PageNotFoundComponent },
  { path: 'authenticate', component: AuthenticationPageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'profile', component: ProfilePageComponent },
  { path: 'stat', component: StatPageComponent },
  { path: 'task', component: TaskPageComponent },
];
