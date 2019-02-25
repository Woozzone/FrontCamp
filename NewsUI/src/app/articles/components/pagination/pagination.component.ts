import { Component, OnInit } from '@angular/core';

import { ArticlesService } from '../../articles.service';
import { SourcesService } from '../../sources.service';

import { DEFAULT_SOURCE } from '../../../shared/config';

@Component({
  selector: 'articles-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  constructor(
    private articlesService: ArticlesService,
    private sourcesService: SourcesService
  ) {}

  ngOnInit() {}

  getArticles() {
    this.articlesService.getArticles().subscribe(data => {
      this.articlesService.articles = data.articles;
    });
  }

  getArticlesBySourceName(name: string) {
    this.articlesService.getArticlesBySourceName(name).subscribe(data => {
      this.articlesService.articles = data.articles;
    });
  }

  showPreviousArticles(): void {
    if (this.articlesService.currentPage > 1) {
      this.articlesService.currentPage--;
    }

    this.handleArticlesSwitch();
  }

  showNextArticles(): void {
    this.articlesService.currentPage++;

    this.handleArticlesSwitch();
  }

  handleArticlesSwitch() {
    if (this.sourcesService.currentSource !== DEFAULT_SOURCE) {
      this.getArticlesBySourceName(this.sourcesService.currentSource);
    } else {
      this.getArticles();
    }
  }
}
