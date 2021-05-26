import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SingInComponent } from "./auth/sing-in/sing-in.component";
import { LoginComponent } from "./auth/login/login.component";
import { MoviesComponent } from "./movies/movies.component";
import { MovieDetailsComponent } from "./movie-details/movie-details.component";
import {PageNotFoundComponent} from "./shared/components/page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: 'sing-in',
    component: SingInComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'movies',
    component: MoviesComponent
  },
  {
    path: 'movie-details/:id',
    component: MovieDetailsComponent,
  },
  {
    path: '',
    redirectTo: 'movies',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
