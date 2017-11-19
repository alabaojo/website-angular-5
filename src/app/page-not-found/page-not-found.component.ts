import { Component, OnInit } from '@angular/core';
import { WindowService } from '../window.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  constructor(public windowService: WindowService) {}

  ngOnInit() {
    if(this.windowService.getWindowLoaded() === null) {
      this.windowService.setWindowLoaded(false);
    }
  }
}
