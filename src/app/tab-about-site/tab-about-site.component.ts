import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-about-site',
  templateUrl: './tab-about-site.component.html',
  styleUrls: ['./tab-about-site.component.scss']
})
export class TabAboutSiteComponent implements OnInit {
	aboutContentAnimationTitle = '';
	aboutContentAnimationText = '';

  ngOnInit() {
  	this.aboutContentAnimationTitle = 'animated fadeInUp';
  	this.aboutContentAnimationText = 'animated fadeInUp';
  }
}
