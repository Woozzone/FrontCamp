import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ArticlesService } from '../../articles.service';

@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.component.html',
  styleUrls: ['./article-create.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ArticleCreateComponent implements OnInit {

  createForm = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ])
  });

  constructor(private articlesService: ArticlesService, private router: Router) { }

  ngOnInit() {
  }

  addArticle(article) {
    this.articlesService.addArticle(article).subscribe(res => {
      this.router.navigate(['/articles']);
    });
  }

  onSubmit(): void {
    this.addArticle(this.createForm.value);
  }
}
