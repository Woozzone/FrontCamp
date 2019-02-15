import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.component.html',
  styleUrls: ['./article-create.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ArticleCreateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(event: any): void {
    event.preventDefault();
    console.log('Submit Creation');
  }
}
