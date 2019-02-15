import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ApiService } from "../../../api.service";
import { Article } from '../../../../mocks/articles.js';

@Component({
  selector: "app-article-detail",
  templateUrl: "./article-detail.component.html",
  styleUrls: ["./article-detail.component.scss"]
})
export class ArticleDetailComponent implements OnInit {
  article: Article;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.getArticle();
  }

  getArticle(): void {
    const title = this.route.snapshot.paramMap.get('title');
    this.article = this.apiService.getArticle(title);
  }
}
