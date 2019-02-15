import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ArticleEditComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(event: any): void {
    event.preventDefault();
    console.log('Submit Editing');
  }
}
