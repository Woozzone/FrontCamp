import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  isOnlyAuthor: Boolean = false;
  @Input() id: String;
  @Input() label: String;
  constructor() { }

  ngOnInit() {
  }

  onChange(): void {
    this.isOnlyAuthor = !this.isOnlyAuthor;
  }
}
