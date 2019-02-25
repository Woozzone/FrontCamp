import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticlesService } from '../../articles.service';
import { Article } from '../../../shared/models/article.model';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {
  article: Article;

  constructor(
    private route: ActivatedRoute,
    private articlesService: ArticlesService
  ) {}

  ngOnInit() {
    this.getArticle();
  }

  getArticle(): void {
    const title = this.route.snapshot.paramMap.get('title');
    this.article = this.articlesService.getArticleByTitle(title);
  }

  isLocalSource(source: string): boolean {
    return this.articlesService.isLocalSource(source);
  }
}
