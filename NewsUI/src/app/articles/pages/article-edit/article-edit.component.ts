import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ArticleEditComponent implements OnInit {

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

  constructor() { }

  ngOnInit() {
  }

  onSubmit(event: any): void {
    console.warn(this.editForm.value);
  }
}
