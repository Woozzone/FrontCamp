import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { LOCAL_URL } from '../shared/config';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  isLogged: boolean = !!localStorage.getItem('user');
  isLoading = false;

  handleLogin(credentials) {
    this.isLoading = true;
    return this.http.post(`${LOCAL_URL}/login`, credentials);
  }

  handleLogout(): void {
    this.isLogged = false;
    localStorage.removeItem('user');
  }
}
