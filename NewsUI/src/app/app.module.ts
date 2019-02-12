import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { PageHeaderComponent } from './layout/page-header/page-header.component';
import { ControlComponent } from './control/control.component';
import { DataListComponent } from './common/data-list/data-list.component';
import { ArticlesListComponent } from './articles/listing/articles-list.component';
import { InputComponent } from './common/input/input.component';
import { ArticleDetailComponent } from './articles/detail/article-detail.component';

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
    ArticleDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}
