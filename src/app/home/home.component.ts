import { Component, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application } from '@nativescript/core'
import { ImageSource } from "@nativescript/core";
import { Image } from "@nativescript/core";
import { QrGenerator } from "nativescript-qr-generator";
import * as AppSettings from '@nativescript/core/application-settings';

@Component({
  selector: 'Home',
  styleUrls: ['home.component.scss'],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  constructor() {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    // Init your component properties here.
    AppSettings.setString('user', 'antonis');
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }

  generateQrCode(event){
    const image = event.object as Image;
    const qr = new QrGenerator().generate('20118702776');
    image.imageSource = new ImageSource(qr);
}
}
