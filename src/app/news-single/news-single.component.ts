import { Component, OnInit } from '@angular/core'
import { RadSideDrawer } from 'nativescript-ui-sidedrawer'
import { Application } from '@nativescript/core'
import { RouterExtensions } from '@nativescript/angular'

@Component({
  selector: 'NewsSingle',
  styleUrls: ['news-single.component.scss'],
  templateUrl: './news-single.component.html',
})
export class NewsSingleComponent implements OnInit {
  public newsItem;

  constructor(private router: RouterExtensions) {
    this.newsItem = this.router.router.getCurrentNavigation().extras.state;
  }

  ngOnInit(): void {
    // Init your component properties here.
  }

  onDrawerButtonTap(): void {
    this.router.back();
  }
}
