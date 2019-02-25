import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'filterArticles'})
export class FilterArticlesPipe implements PipeTransform {
  transform(articles: any[], title: string): any {
      return articles.filter(article => article.title.includes(title));
  }
}