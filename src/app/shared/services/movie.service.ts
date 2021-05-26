import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Category} from "../models/category";
import {HttpClient} from "@angular/common/http";
import {Movie} from "../models/movie";
import {Comment} from "../models/comment";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private URL = 'https://5fe8885b2e12ee0017ab47c0.mockapi.io/api/v1'

  constructor(private readonly http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.URL}/categories`)
  }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.URL}/movies`)
  }

  getComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.URL}/comments`)
  }
}
