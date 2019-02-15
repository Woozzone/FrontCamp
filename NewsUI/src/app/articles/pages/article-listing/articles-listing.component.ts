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
    this.articlesService.getArticles().subscribe(data => {
      this.articlesService.articles = data.articles;
    });
  }
}
