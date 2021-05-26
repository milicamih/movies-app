import { Component, OnInit } from '@angular/core';
import {MovieService} from "../shared/services/movie.service";
import {Movie} from "../shared/models/movie";
import {Category} from "../shared/models/category";
import {AuthService} from "../auth/auth.service";
import {User} from "../auth/sing-in/sing-in.component";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
  categories: Category[] = [];
  currentUser: User;
  activeCategory = '';

  constructor(private movieService: MovieService,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.getMovies();
    this.getCategories();
    this.currentUser = this.authService.getCurrentUser()
  }

  filterMovies(category: string): void {
    this.activeCategory = category;
  }

  private getMovies(): void {
    this.movieService.getMovies().subscribe((res: Movie[])  => this.movies = res)
  }

  private getCategories(): void {
    this.movieService.getCategories().subscribe((res: Category[])  => this.categories = res)
  }

}
