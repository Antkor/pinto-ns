import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { RouterExtensions } from '@nativescript/angular'
import * as AppSettings from '@nativescript/core/application-settings';

@Component({
  selector: 'Login',
  styleUrls: ['login.component.scss'],
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private routerExtensions: RouterExtensions) {

    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
  
  }

  login() {
    AppSettings.setString('user', 'antonis');
    this.routerExtensions.navigate(['/home']);
  }
}
