import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

//hapi 8 e importojm httpclient
export class MoviesService {

  constructor(private http:HttpClient) { }

  movies(){
    return this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=5d815bdc2d813420629d90447e476b59&sort_by=popularity.desc&include_adult=false&include_video=false&page=1')
  }
}
