import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

import { SourcesService } from './sources.service';
import { API_URL, LOCAL_URL, API_KEY, DEFAULT_SOURCE } from '../shared/config';
import { Article } from '../shared/models/article.model';

@Injectable()
export class ArticlesService {
  filterValue = '';
  articles: Article[] = [];
  currentPage = 1;

  constructor(
    private sourcesService: SourcesService,
    private http: HttpClient
  ) {}

  getArticles() {
    const newsArticlesEndpoint = `${API_URL}/top-headlines?language=en&page=${this.currentPage}&apiKey=${API_KEY}`;
    const localArticlesEndpoint = `${LOCAL_URL}/articles`;
    const localArticles = this.http.get<any>(localArticlesEndpoint);
    const newsArticles = this.http.get<any>(newsArticlesEndpoint);

    return forkJoin([localArticles, newsArticles]).pipe(map(responses => {
      return [...responses[0].reverse(), ...responses[1].articles];
    }));
  }

  getArticlesBySourceName(name: string) {
    const source = this.sourcesService.sources.filter(source => source.name === name);

    if (name === '') {
      return this.getArticles();
    }

    if (source.length && source[0].name !== DEFAULT_SOURCE) {
      const id = source[0].id;
      const url = `${API_URL}/everything?sources=${id}&language=en&page=${this.currentPage}&apiKey=${API_KEY}`;

      return this.http.get<any>(url);
    }

    if (source[0].name === DEFAULT_SOURCE) {
      const url = `${LOCAL_URL}/articles`;

      return this.http.get<any>(url);
    }
  }

  getArticleByTitle(title: string) {
    return this.articles.filter(article => article.title === title)[0];
  }

  addArticle(article: Article): Observable<Article> {
    return this.http.post<Article>(`${LOCAL_URL}/articles`, article);
  }

  deleteArticle(id: string): Observable<{}> {
    return this.http.delete(`${LOCAL_URL}/articles/${id}`);
  }

  updateArticle(article: Article): Observable<{}> {
    return this.http.put(`${LOCAL_URL}/articles/${article._id}`, article);
  }

  setFilterValue(value: string) {
    this.filterValue = value;
  }

  isLocalSource(source: string) {
    return source === DEFAULT_SOURCE;
  }
}
