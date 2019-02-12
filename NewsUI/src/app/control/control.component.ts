import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})
export class ControlComponent implements OnInit {
  constructor(public apiService: ApiService) { }
  sources;

  ngOnInit() {
    this.getSources();
  }

  getSources() {
    this.sources = this.apiService.getSources();
  }
}
