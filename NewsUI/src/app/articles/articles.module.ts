import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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

// to refactor
import { ArticlesListingComponent } from './pages/article-listing/articles-listing.component';
import { ArticleDetailComponent } from './components/article-detail/article-detail.component';
import { ArticleEditComponent } from './components/article-edit/article-edit.component';
import { ArticleCreateComponent } from './components/article-create/article-create.component';

// Shared Components.
import { DataListComponent } from '../shared/components/data-list/data-list.component';
import { InputComponent } from '../shared/components/input/input.component';
import { TextareaComponent } from '../shared/components/textarea/textarea.component';
import { CheckboxComponent } from '../shared/components/checkbox/checkbox.component';


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
  ],
  imports: [CommonModule, ArticlesRoutingModule, FontAwesomeModule],
  providers: [ArticlesService, SourcesService, AuthService],
  exports: [ArticlesComponent]
})
export class ArticlesModule {}
