import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MovieService} from "../shared/services/movie.service";
import {mergeMap, tap} from "rxjs/operators";
import {Movie} from "../shared/models/movie";
import {Comment} from "../shared/models/comment";
import {AuthService} from "../auth/auth.service";
import {SnackbarService} from "../shared/services/snackbar.service";
import {User} from "../auth/sing-in/sing-in.component";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  movie: Movie;
  comment = '';
  currentUser: User;

  constructor(private activatedRoute: ActivatedRoute,
              private movieService: MovieService,
              private router: Router,
              private authService: AuthService,
              public snackbar: SnackbarService) {
  }

  ngOnInit(): void {
    const movieId = this.activatedRoute.snapshot.params.id
    this.getMovieDetails(movieId);
    this.currentUser = this.authService.getCurrentUser()
  }

  addComment() {
    if (!this.currentUser) {
      this.snackbar.openSnackBar('To add a comment you must be logged');
      this.router.navigate(['./login'])
    } else {
      this.movie.comments.push({
        id: new Date().toString(),
        movieId: this.movie.id,
        createdAt: new Date().toString(),
        text: this.comment,
      })
      this.comment = '';
    }
  }

  private getMovieDetails(id: string) {
    this.movieService.getMovies().pipe(
      tap((movie: Movie[]) =>
        this.movie = movie.find((movie: Movie) => movie.id === id)),
      mergeMap(() => this.movieService.getComments())
    ).subscribe((comments: Comment[]) => {
      this.movie.comments = [];
      comments.forEach(comment => {
        if (comment.movieId === id) {
          this.movie.comments.push(comment)
        }
      })
    })
  }
}
