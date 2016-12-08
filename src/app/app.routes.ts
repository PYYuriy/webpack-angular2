import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';
import { DetailComponent } from './+detail/detail.component';
import { AboutComponent } from './about/about.component';


export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'detail', component: DetailComponent },
  { path: '**',    component: NoContentComponent },
];
