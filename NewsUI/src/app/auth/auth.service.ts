import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { LOCAL_URL, CREDENTIALS } from '../shared/config';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  isLogged: boolean = !!localStorage.getItem('user');
  isLoading = false;

  handleLogin(): void {
    this.isLoading = true;
    this.http
      .post(`${LOCAL_URL}/login`, CREDENTIALS)
      .subscribe(
        res => {
          this.isLoading = false;
          this.isLogged = true;
          localStorage.setItem('user', JSON.stringify(CREDENTIALS.username));
        }
      );
  }

  handleLogout(): void {
    this.isLogged = false;
    localStorage.removeItem('user');
  }
}
