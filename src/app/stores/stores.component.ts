import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { Application } from "@nativescript/core";

import { storeData } from "../common/data/storeData";
import { getUserLocation, applyHaversine } from "../common/utils";

@Component({
  selector: "Stores",
  styleUrls: ["stores.component.scss"],
  templateUrl: "./stores.component.html"
})
export class StoresComponent implements OnInit {
  public stores = [];
  constructor() {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    getUserLocation().then(location => {
      const storeDataWithDistance = applyHaversine(
        storeData,
        location.lat,
        location.long
      );
  
      const sortedStoreData = storeDataWithDistance.sort(
        (locationA, locationB) => {
          return locationA.distance - locationB.distance;
        }
      );

      this.stores = sortedStoreData;
    });
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView();
    sideDrawer.showDrawer();
  }
}
