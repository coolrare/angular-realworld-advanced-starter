import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Articles, SingleArticle, CreateArticle } from './article';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private httpClient: HttpClient) {}

  getArticles() {
    console.log(environment);
    return this.httpClient.get<Articles>(`${environment.apiUrl}/api/articles`);
  }

  getArticle(slug: string) {
    return this.httpClient.get<SingleArticle>(`${environment.apiUrl}/api/articles/${slug}`);
  }

  createArticle(article: CreateArticle) {
    return this.httpClient.post<SingleArticle>(`${environment.apiUrl}/api/articles`, { article });
  }
}
