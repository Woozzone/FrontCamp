import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../../articles.service';

@Component({
  selector: 'app-articles-listing',
  templateUrl: './articles-listing.component.html',
  styleUrls: ['./articles-listing.component.scss']
})
export class ArticlesListingComponent implements OnInit {
  constructor(public articlesService: ArticlesService) { }

  ngOnInit() {
    this.getArticles();
    this.getLocalArticles();
  }

  getArticles() {
    this.articlesService.getArticles().subscribe(data => {
      this.articlesService.articles = data.articles;
    });
  }

  getLocalArticles() {
    this.articlesService.getLocalArticles().subscribe(articles => {
      const newsArticles = this.articlesService.articles;
      this.articlesService.articles = [
        ...articles,
        ...newsArticles
      ];
    });
  }

  isLocalSource(source: string): boolean {
    return this.articlesService.isLocalSource(source);
  }
}
