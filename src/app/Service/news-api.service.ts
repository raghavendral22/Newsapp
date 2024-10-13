import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  constructor(private http:HttpClient) { }
  newsApiUrl="https://newsapi.org/v2/top-headlines?country=us&apiKey=fc7604ab18aa40a69e36ae0bd5b2323f";

  topHeading():Observable<any>{
    return this.http.get(this.newsApiUrl);
  }

}
