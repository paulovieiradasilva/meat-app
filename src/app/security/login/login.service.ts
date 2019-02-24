import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { MEAT_API } from "../../../app.api";
import { User } from "./user.model";
import "rxjs/add/operator/do";

@Injectable()
export class LoginService {
  user: User;

  constructor(private http: HttpClient, private router: Router) {}

  isLoggedIn(): boolean {
    return this.user !== undefined;
  }

  toIdentify(path?: string) {
    this.router.navigate(["/login", btoa(path)]);
  }

  login(email: string, password: string): Observable<User> {
    return this.http
      .post<User>(`${MEAT_API}/login`, { email, password })
      .do(user => (this.user = user));
  }
}
