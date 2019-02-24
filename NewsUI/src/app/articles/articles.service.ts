import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SourcesService } from './sources.service';
import { API_URL, API_KEY } from '../shared/config';
import { Article } from '../shared/models/article.model';

@Injectable()
export class ArticlesService {
  articles: Article[] = [];
  currentPage: number = 1;

  constructor(
    private sourcesService: SourcesService,
    private http: HttpClient
  ) {}

  getArticles() {
    const url = `${API_URL}/top-headlines?language=en&page=${this.currentPage}&apiKey=${API_KEY}`;

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
}
