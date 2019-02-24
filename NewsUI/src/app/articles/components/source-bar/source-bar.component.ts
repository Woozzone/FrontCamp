import { Component } from '@angular/core';

import { SourcesService } from '../../sources.service';

@Component({
  selector: 'app-source-bar',
  templateUrl: './source-bar.component.html',
  styleUrls: ['./source-bar.component.scss']
})
export class SourceBarComponent {
  constructor(private sourcesService: SourcesService) {}
}
