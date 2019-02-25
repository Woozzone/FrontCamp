import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.scss']
})
export class DataListComponent implements OnInit {
  @Input() placeholder: string;
  @Input('data-list') dataList: Array<any>;
  @Output() changed = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  onChange(event: any) {
    this.changed.emit(event);
  }
}
