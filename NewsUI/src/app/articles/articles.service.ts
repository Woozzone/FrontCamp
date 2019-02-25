import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
    const url = `${API_URL}/top-headlines?language=en&page=${this.currentPage}&apiKey=${API_KEY}`;

    return this.http.get<any>(url);
  }

  getLocalArticles() {
    const url = `${LOCAL_URL}/articles`;

    return this.http.get<any>(url);
  }

  getArticlesBySourceName(name: string) {
    const source = this.sourcesService.sources.filter(source => source.name === name);

    if (source.length) {
      const id = source[0].id;
      const url = `${API_URL}/everything?sources=${id}&language=en&page=${this.currentPage}&apiKey=${API_KEY}`;

      return this.http.get<any>(url);
    }
  }

  getArticleByTitle(title: string) {
    return this.articles.filter(article => article.title === title)[0];
  }

  addArticle(article: Article): Observable<Article> {
    return this.http.post<Article>(`${LOCAL_URL}/articles`, article);
  }

  setFilterValue(value: string) {
    this.filterValue = value;
  }

  isLocalSource(source: string) {
    return source === DEFAULT_SOURCE;
  }
}
