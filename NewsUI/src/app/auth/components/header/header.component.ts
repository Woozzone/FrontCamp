import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faSpinner = faSpinner;
  constructor(private authService: AuthService) {}

  ngOnInit() {}

  isLoading(): boolean {
    return this.authService.isLoading;
  }

  isLogged(): boolean {
    return this.authService.isLogged;
  }

  login(): void {
    this.authService.handleLogin();
  }

  logout(): void {
    this.authService.handleLogout();
  }
}
