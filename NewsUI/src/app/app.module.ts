import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AuthModule } from './auth/auth.module';
import { ArticlesModule } from './articles/articles.module';

import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AuthModule,
    ArticlesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}
