import { Component, OnInit, Input } from '@angular/core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  isChecked = false;
  faCheck = faCheck;
  @Input() id: string;
  @Input() label: string;
  constructor() { }

  ngOnInit() {
  }

  onChange(): void {
    this.isChecked = !this.isChecked;
  }
}
