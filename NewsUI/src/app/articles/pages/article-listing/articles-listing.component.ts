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
  }

  getArticles() {
    this.articlesService.getArticles().subscribe(articles => {
      this.articlesService.articles = articles;
    });
  }

  deleteArticle(id: string): void {
    this.articlesService.deleteArticle(id).subscribe(res => {
      this.articlesService.articles = this.articlesService.articles.filter(article => article._id !== id);
    });
  }

  isLocalSource(source: string): boolean {
    return this.articlesService.isLocalSource(source);
  }
}
