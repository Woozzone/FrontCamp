import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent implements OnInit {
  @Input() id: String;
  @Input() placeholder: String;
  @Input() label: String;

  constructor() { }

  ngOnInit() {
  }

}
