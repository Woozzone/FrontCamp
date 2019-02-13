import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss']
})
export class ArticlesListComponent implements OnInit {
  articles;
  constructor(public apiService: ApiService) { }

  ngOnInit() {
    this.getArticles();
  }

  getArticles() {
    this.articles = this.apiService.getArticles();
  }

  onArticlesLoad() {
    console.log('Load Articles...');
  }
}
