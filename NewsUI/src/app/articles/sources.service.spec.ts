import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { SourcesService } from './sources.service';
import { API_URL, API_KEY, DEFAULT_SOURCE } from '../shared/config';

describe('SourcesService', () => {
  let service: SourcesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SourcesService]
    });

    service = TestBed.get(SourcesService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should return sources from news api', () => {
    service.getSources().subscribe((data: any) => {
      expect(data.status).toBe('ok');
      expect(data.sources.length).toBeGreaterThan(0);
    });

    const req = httpMock.expectOne(
      `${API_URL}/sources?language=en&apiKey=${API_KEY}`,
      'fetch sources from news api'
    );

    expect(req.request.method).toBe('GET');

    req.flush({
      status: 'ok',
      sources: [
        {
          id: 'abc-news',
          name: 'ABC News',
          description:
            'Your trusted source for breaking news, analysis, exclusive interviews, headlines, and videos at ABCNews.com.',
          url: 'https://abcnews.go.com',
          category: 'general',
          language: 'en',
          country: 'us'
        }
      ]
    });

    httpMock.verify();
  });

  it('should return current source', () => {
    expect(service.getCurrentSource()).toBe(DEFAULT_SOURCE);
  });

  it('should set current source', () => {
    const mockSource = 'ABC News';

    service.setCurrentSource(mockSource);
    expect(service.getCurrentSource()).toBe(mockSource);
  });

  it('should set default source if isn\'t provided', () => {
    const mockSource = 'ABC News';
    service.setCurrentSource(mockSource);
    expect(service.getCurrentSource()).toBe(mockSource);
    service.setCurrentSource();
    expect(service.getCurrentSource()).toBe(DEFAULT_SOURCE);
  });

  it('sources should contain default source', () => {
    const localSource = service.sources.filter(source => source.name === DEFAULT_SOURCE);
    expect(localSource.length).toBeGreaterThan(0);
  });
});
