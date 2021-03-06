import { Component, OnInit } from '@angular/core'
import { NavigationEnd, Router } from '@angular/router'
import { RouterExtensions } from '@nativescript/angular'
import {
  DrawerTransitionBase,
  RadSideDrawer,
  SlideInOnTopTransition,
} from 'nativescript-ui-sidedrawer'
import { filter } from 'rxjs/operators'
import { Application } from '@nativescript/core'
import * as AppSettings from '@nativescript/core/application-settings';

@Component({
  selector: 'ns-app',
  styleUrls: ['app.component.scss'],
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
  private _activatedUrl: string
  private _sideDrawerTransition: DrawerTransitionBase

  constructor(private router: Router, private routerExtensions: RouterExtensions) {

  }

  ngOnInit(): void {
    this._activatedUrl = '/home';
    this._sideDrawerTransition = new SlideInOnTopTransition();

    this.router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => (this._activatedUrl = event.urlAfterRedirects));
  }

  get sideDrawerTransition(): DrawerTransitionBase {
    return this._sideDrawerTransition;
  }

  isComponentSelected(url: string): boolean {
    return this._activatedUrl === url;
  }

  onNavItemTap(navItemRoute: string): void {
    this.routerExtensions.navigate([navItemRoute], {
      transition: {
        name: 'fade',
      },
    });

    const sideDrawer = <RadSideDrawer>Application.getRootView();
    sideDrawer.closeDrawer();
  }

  logout() {
    const sideDrawer = <RadSideDrawer>Application.getRootView();
    sideDrawer.closeDrawer();
    
    AppSettings.clear();
    this.routerExtensions.navigate(['login'], {
      transition: {
        name: 'fade',
      },
    });
  }
}
