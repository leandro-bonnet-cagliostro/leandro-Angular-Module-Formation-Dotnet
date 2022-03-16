import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { MoviesComponent } from './components/movies/movies.component';
import { Page404NotFoundComponent } from './components/page404-not-found/page404-not-found.component';
import { UsersComponent } from './components/users/users.component';
import { IsAdminGuard } from './is-admin.guard';
import { IsLogGuard } from './is-log.guard';

const routes: Routes = [
  {
    path: '',
    component: LoginFormComponent
    // component : UsersComponent
  },
  {
    path: 'movie',
    component: MoviesComponent,
    canActivate: [IsLogGuard],
    // children : [{
    //   path: 'details/:id',
    //   component : DetailsComponent
    // }]
  },
  {
    path: 'user',
    component: UsersComponent,
    canActivate: [IsAdminGuard],
  },
  {
    // path: 'details/movie/:id',
    // path: 'details/?movie=:id',
    // path: 'details/movie/:id',
    // path: 'details/movie',
    path: 'details',
    component: DetailsComponent,
    canActivate: [IsLogGuard],
    // data : { id : ':id'}
  },
  {
    path: "**",
    component : Page404NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
