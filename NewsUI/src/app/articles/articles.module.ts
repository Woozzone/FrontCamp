import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ArticlesRoutingModule } from './articles.routes';
import { AuthService } from '../auth/auth.service';
import { ArticlesService } from './articles.service';
import { SourcesService } from './sources.service';

// Articles Components.
import { ArticlesComponent } from './articles.component';
import { SourceBarComponent } from './components/source-bar/source-bar.component';
import { ControlBarComponent } from './components/control-bar/control-bar.component';
import { PaginationComponent } from './components/pagination/pagination.component';

// Pages.
import { ArticlesListingComponent } from './pages/article-listing/articles-listing.component';
import { ArticleDetailComponent } from './pages/article-detail/article-detail.component';
import { ArticleEditComponent } from './pages/article-edit/article-edit.component';
import { ArticleCreateComponent } from './pages/article-create/article-create.component';

// Shared Components.
import { DataListComponent } from '../shared/components/data-list/data-list.component';
import { InputComponent } from '../shared/components/input/input.component';
import { TextareaComponent } from '../shared/components/textarea/textarea.component';
import { CheckboxComponent } from '../shared/components/checkbox/checkbox.component';

// Pipes.
import { FilterArticlesPipe } from './articles.pipe';


@NgModule({
  declarations: [
    ArticlesComponent,
    SourceBarComponent,
    ControlBarComponent,
    DataListComponent,
    InputComponent,
    TextareaComponent,
    CheckboxComponent,
    ArticlesListingComponent,
    ArticleDetailComponent,
    ArticleEditComponent,
    ArticleCreateComponent,
    PaginationComponent,
    FilterArticlesPipe
  ],
  imports: [CommonModule, ReactiveFormsModule, ArticlesRoutingModule, FontAwesomeModule],
  providers: [ArticlesService, SourcesService, AuthService],
  exports: [ArticlesComponent]
})
export class ArticlesModule {}
