import { Injectable } from '@angular/core';
import { Source, sources } from '../mocks/sources.js';
import { Article, articles } from '../mocks/articles.js';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  getSources(): Source[] {
    return sources;
  }

  getArticles(): Article[] {
    return articles;
  }
}
