import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() type: String;
  @Input() id: String;
  @Input() placeholder: String;
  @Input() label: String;
  constructor() { }

  ngOnInit() {
  }

}
