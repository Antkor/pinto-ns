import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { RouterExtensions } from '@nativescript/angular'
import * as AppSettings from '@nativescript/core/application-settings';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationGuard implements CanActivate {
  constructor(
    private routerExtensions: RouterExtensions,
    private router: Router,
  ) {}

  public canActivate(): boolean {
    const user = AppSettings.getString('user');
    
    if (user && user.length) {
      return true;
    } else {
      this.routerExtensions.navigate(["/login"]);
      return false;
    }
  }
}
