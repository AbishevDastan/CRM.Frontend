import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { AdminProvider } from '../providers/admin.provider';
import { Admin } from '../models/admin/admin';
import { TokenModel } from '../models/admin/token.model';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private url = "Admin";

  constructor(private httpClient: HttpClient,
      private adminProvider: AdminProvider) { }

  register(email: string, password: string, confirmPassword: string) {
    return this.httpClient.post<Admin>(`${environment.apiUrl}/${this.url}/register`, {
      email,
      password,
      confirmPassword
    });
  }

  private static setToken(tokenModel: TokenModel | null): void {
    if (tokenModel) {
      localStorage.setItem('token', tokenModel.token);
      localStorage.setItem('token-exp', tokenModel.expiresAt.toString());
    } else {
      this.removeLocalStorageItems();
    }
  }

  private static removeLocalStorageItems(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('token-exp');
  }

  login(email: string, password: string) {
    return this.httpClient
      .post(`${environment.apiUrl}/${this.url}/login`, { email, password })
      .pipe(
        tap((tokenResponse: any) => {
              AdminService.setToken(tokenResponse);
              this.isAuthenticated();
        }),
      );
  }

  logout(): void {
    AdminService.setToken(null);
    this.adminProvider.currentAdmin = null;
  }

  isAuthenticated(): boolean {
    return this.token !== null;
  }

  get token(): string|null {
    const expDate = new Date(localStorage.getItem('token-exp') as string);
    if (new Date() > expDate) {
      this.logout();
      return null;
    }
    return localStorage.getItem('token');
  }

  get expiredAt(): Date {
    const expDate = localStorage.getItem('token-exp');

    return expDate
      ? new Date(expDate)
      : new Date();
  }
}
