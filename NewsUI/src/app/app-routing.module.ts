import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticlesListComponent } from './articles/article-listing/articles-list.component';
import { ArticleDetailComponent } from './articles/article-detail/article-detail.component';
import { ArticleEditComponent } from './articles/article-edit/article-edit.component';
import { ArticleCreateComponent } from './articles/article-create/article-create.component';

const routes: Routes = [
  { path: '', redirectTo: '/articles', pathMatch: 'full' },
  { path: 'articles', component: ArticlesListComponent },
  { path: 'articles/new', component: ArticleCreateComponent },
  { path: 'articles/:title', component: ArticleDetailComponent },
  { path: 'articles/:title/edit', component: ArticleEditComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}