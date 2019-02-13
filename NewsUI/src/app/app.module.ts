import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { PageHeaderComponent } from './layout/page-header/page-header.component';
import { ControlComponent } from './control/control.component';
import { DataListComponent } from './common/data-list/data-list.component';
import { ArticlesListComponent } from './articles/article-listing/articles-list.component';
import { InputComponent } from './common/input/input.component';
import { ArticleDetailComponent } from './articles/article-detail/article-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { ArticleEditComponent } from './articles/article-edit/article-edit.component';
import { ArticleCreateComponent } from './articles/article-create/article-create.component';
import { TextareaComponent } from './common/textarea/textarea.component';
import { ArticleLoadComponent } from './articles/article-load/article-load.component';
import { CheckboxComponent } from './common/checkbox/checkbox.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PageHeaderComponent,
    ControlComponent,
    DataListComponent,
    ArticlesListComponent,
    InputComponent,
    ArticleDetailComponent,
    ArticleEditComponent,
    ArticleCreateComponent,
    TextareaComponent,
    ArticleLoadComponent,
    CheckboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}
