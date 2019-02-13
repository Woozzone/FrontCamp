import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-article-load',
  templateUrl: './article-load.component.html',
  styleUrls: ['./article-load.component.scss']
})
export class ArticleLoadComponent implements OnInit {
  @Output() loadArticles = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  handleLoadArticles() {
    this.loadArticles.emit(null);
  }

}
