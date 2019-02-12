import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.scss']
})
export class DataListComponent implements OnInit {
  @Input() placeholder: String;
  @Input('data-list') dataList: Array<any>;
  constructor() { }

  ngOnInit() {
  }

  onChange(event: any) {
    console.log(`${event.target.value} has been selected`);
  }
}
