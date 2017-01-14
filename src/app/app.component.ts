import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
declare let ga: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        ga('set', 'page', event.urlAfterRedirects);
        ga('send', 'pageview');
      }
    });
  }

  titleAnimation = '';
  navAnimation = '';

  ngOnInit() {
  	this.titleAnimation = "animated fadeIn";
    this.navAnimation = 'animated fadeInLeft';
    this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
            return;
        }
        document.body.scrollTop = 0;
    });
  }
}
