import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authUrl: string = environment.auth_url;
  private _token: string;

  constructor(
      private http: HttpClient
  ) { }

  public get isAuth() {
    return this._token || localStorage.getItem('token');
  }

  private set token({token}) {
    this._token = token;
    localStorage.setItem('token', token);
  }

  login(email: string, pass: string): Observable<boolean> {
    return this.http.post(`${ this.authUrl }/api/login`, {
      "email": email,
      "password": pass
    }).pipe(
        map((res: object): boolean => {
          this.token = res;
          return true;
        })
    );
  }

  register(email: string, pass: string): Observable<boolean> {
    return this.http.post(`${this.authUrl}/api/register`, {
      "email": email,
      "password": pass
    }).pipe(
        map((res: object): boolean => {
          this.token = res;
          return true;
        })
    );
  }

  logout() {
    this._token = '';
    localStorage.removeItem('token');
  }
}
