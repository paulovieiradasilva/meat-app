import { Injectable } from "@angular/core";
import { CanLoad, Route } from "@angular/router";
import { LoginService } from "./login/login.service";

@Injectable()
export class LoggedInGuard implements CanLoad {
  constructor(private loginServer: LoginService) {}

  canLoad(route: Route) {
    const loogedIn = this.loginServer.isLoggedIn();

    if (!loogedIn) {
      this.loginServer.toIdentify(`/${route.path}`);
    }

    return loogedIn;
  }
}
