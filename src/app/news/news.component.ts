import { Component, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application } from '@nativescript/core'
import { newsData } from "../common/data/newsData";
import { RouterExtensions } from '@nativescript/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'News',
  styleUrls: ['news.component.scss'],
  templateUrl: './news.component.html',
})
export class NewsComponent implements OnInit {
  public news = newsData;

  constructor(private router: Router, private routerExtensions: RouterExtensions) {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    // Init your component properties here.
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>Application.getRootView()
    sideDrawer.showDrawer()
  }

  navigateToSingle(newsItem) {
    this.routerExtensions.navigate(['/news-single'], {
        state: {
          title: newsItem.title,
          text: newsItem.text,
      }
    });
  }

  getItemText(text) {
    return text.substring(0, 140) + '...';
  }
}
