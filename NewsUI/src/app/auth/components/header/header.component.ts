import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { CREDENTIALS } from '../../../shared/config';

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
    this.authService.handleLogin(CREDENTIALS).subscribe(
      res => {
        this.authService.isLoading = false;
        this.authService.isLogged = true;
        localStorage.setItem('user', JSON.stringify(CREDENTIALS.username));
      }
    );
  }

  logout(): void {
    this.authService.handleLogout();
  }
}
