import { Injectable } from '@angular/core';
import { Article, articles } from '../mocks/articles.js';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  getArticles(): Article[] {
    return articles;
  }

  getArticle(title: String): Article {
    return articles.find(article => article.title === title)
  }
}
