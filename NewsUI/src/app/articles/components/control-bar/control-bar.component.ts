import { Component, OnInit } from '@angular/core';

import { SourcesService } from '../../sources.service';
import { ArticlesService } from '../../articles.service';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-control-bar',
  templateUrl: './control-bar.component.html',
  styleUrls: ['./control-bar.component.scss']
})
export class ControlBarComponent implements OnInit {
  constructor(
    private sourcesService: SourcesService,
    private articlesService: ArticlesService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.getSources();
  }

  isLogged(): boolean {
    return this.authService.isLogged;
  }

  isSourcesContain(sourceName: string): boolean {
    return !!this.sourcesService.sources.filter(source => source.name === sourceName).length;
  }

  getSources(): void {
    this.sourcesService.getSources().subscribe(data => {
      this.sourcesService.sources.push(...data.sources);
    });
  }

  getCurrentSource(): string {
    return this.sourcesService.getCurrentSource();
  }

  setCurrentSource(event: any) {
    this.sourcesService.setCurrentSource(event.target.value);
  }

  getArticlesBySourceName(name: string) {
    this.articlesService.getArticlesBySourceName(name).subscribe(data => {
      this.articlesService.articles = data.articles;
    });
  }

  onChangeSource(event: any) {
    const sourceName = event.target.value;

    if (this.isSourcesContain(sourceName)) {
      this.setCurrentSource(event);
      this.getArticlesBySourceName(event.target.value);
    }
  }
}
