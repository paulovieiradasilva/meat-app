import { Injectable } from "@angular/core";
import {
  CanLoad,
  CanActivate,
  Route,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { LoginService } from "./login/login.service";

@Injectable()
export class LoggedInGuard implements CanLoad, CanActivate {
  constructor(private loginServer: LoginService) {}

  checkAuthentication(path: string): boolean {
    const loogedIn = this.loginServer.isLoggedIn();

    if (!loogedIn) {
      this.loginServer.toIdentify(`/${path}`);
    }

    return loogedIn;
  }

  canLoad(route: Route) {
    return this.checkAuthentication(route.path);
  }

  canActivate(
    activatedRoute: ActivatedRouteSnapshot,
    routeState: RouterStateSnapshot
  ): boolean {
    return this.checkAuthentication(activatedRoute.routeConfig.path);
  }
}
