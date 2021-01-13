import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import { TokenService } from '@core/services/token.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private af: AngularFireAuth,
    private http: HttpClient,
    private tokenService: TokenService
  ) {}

  createUser(email: string, password: string) {
    return this.af.createUserWithEmailAndPassword(email, password);
  }

  login(email: string, password: string) {
    return this.af.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.af.signOut();
  }

  hasUser() {
    return this.af.authState;
  }

  loginRestAPI(email: string, password: string) {
    return this.http
      .post('https://platzi-store.herokuapp.com/auth', {
        email,
        password,
      })
      .pipe(
        tap((data: { token: string }) => {
          const token = data.token;
          this.tokenService.saveToken(token);
        })
      );
  }
}
