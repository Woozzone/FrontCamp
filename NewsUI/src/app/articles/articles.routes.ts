import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticlesListingComponent } from './pages/article-listing/articles-listing.component';
import { ArticleDetailComponent } from './components/article-detail/article-detail.component';
import { ArticleEditComponent } from './components/article-edit/article-edit.component';
import { ArticleCreateComponent } from './components/article-create/article-create.component';

const routes: Routes = [
  { path: '', redirectTo: '/articles', pathMatch: 'full' },
  { path: 'articles', component: ArticlesListingComponent },
  { path: 'articles/new', component: ArticleCreateComponent },
  { path: 'articles/:title', component: ArticleDetailComponent },
  { path: 'articles/:title/edit', component: ArticleEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule {}
