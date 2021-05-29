import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IMDBService {
  URL = 'https://imdb8.p.rapidapi.com/title';

  constructor(private readonly http: HttpClient) {}

  headers = new HttpHeaders(
      {
        'x-rapidapi-key': '1691fe1f3bmsh34d4a134653254cp143feejsn14bda19c4522',
        'x-rapidapi-host': 'imdb8.p.rapidapi.com'
      });


  getMovieTrailer(movieId: string): Observable<any> {
    return this.http.get<any>(`${this.URL}/get-videos?tconst=${movieId}&limit=1&region=US`,
        {headers: this.headers});
  }

}
