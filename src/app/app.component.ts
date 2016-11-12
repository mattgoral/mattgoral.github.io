import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	titleAnimation = '';
  navAnimation = '';

  ngOnInit() {
  	this.titleAnimation = "animated fadeIn";
    this.navAnimation = 'animated fadeInLeft';
  }
}
