import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() type: string;
  @Input() id: string;
  @Input() placeholder: string;
  @Input() label: string;
  @Output() changed = new EventEmitter();

  onChange(event: any) {
    this.changed.emit(event);
  }

  constructor() {}

  ngOnInit() {}
}
