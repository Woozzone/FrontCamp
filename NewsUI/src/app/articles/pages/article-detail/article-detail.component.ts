import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private router: Router,
    private articlesService: ArticlesService
  ) {}

  ngOnInit() {
    this.getArticle();
  }

  getArticle(): void {
    const title = this.route.snapshot.paramMap.get('title');
    this.article = this.articlesService.getArticleByTitle(title);
  }

  deleteArticle(id: string): void {
    this.articlesService.deleteArticle(id).subscribe(res => {
      this.articlesService.articles = this.articlesService.articles.filter(article => article._id !== id);
      this.router.navigate(['/articles']);
    });
  }

  isLocalSource(source: string): boolean {
    return this.articlesService.isLocalSource(source);
  }
}
