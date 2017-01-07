import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private router: Router) { }

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
