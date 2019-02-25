import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { DEFAULT_SOURCE, API_KEY, API_URL } from '../shared/config';
import { Source } from '../shared/models/source.model';

@Injectable()
export class SourcesService {
  sources: Source[] = [{
    name: DEFAULT_SOURCE
  }];
  currentSource: string = DEFAULT_SOURCE;
  constructor(private http: HttpClient) {}

  getSources() {
    return this.http.get<any>(`${API_URL}/sources?language=en&apiKey=${API_KEY}`);
  }

  getCurrentSource(): string {
    return this.currentSource;
  }

  setCurrentSource(source: string): void {
    this.currentSource = source || DEFAULT_SOURCE;
  }
}
