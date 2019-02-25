import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticlesService } from '../../articles.service';
import { Article } from '../../../shared/models/article.model';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ArticleEditComponent implements OnInit {

  article: Article;

  editForm = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ])
  });

  constructor(private articlesService: ArticlesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const title = this.route.snapshot.paramMap.get('title');
    this.setCurrentArticle(title);
    this.updateForm();
  }

  updateForm() {
    this.editForm.patchValue({
      title: this.article.title,
      description: this.article.description
    });
  }

  setCurrentArticle(title: string): void {
    this.article = this.articlesService.getArticleByTitle(title);
  }

  updateArticle(article: Article): void {
    this.articlesService.updateArticle(article).subscribe(res => {
      this.router.navigate([`/articles`]);
    });
  }

  onSubmit(): void {
    this.updateArticle({
      ...this.article,
      ...this.editForm.value
    });
  }
}
