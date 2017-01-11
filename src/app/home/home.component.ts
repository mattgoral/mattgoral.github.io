import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	loadAnimation = '';
	contentActive = 'app-tab-welcome';

	tabs = [{
            title: 'Thanks!',
            icon: 'fa-heart',
            url: 'app-tab-easter-eggs',
            active: false,
            hideSmall: true
        }, {
            title: 'About This Site',
            icon: 'fa-info-circle',
            url: 'app-tab-about-site',
            active: false,
            hideSmall: false
        }, {
            title: 'Welcome',
            icon: 'fa-star',
            url: 'app-tab-welcome',
            active: true,
            hideSmall: false
    }];

	selectTab(tab) {
		this.tabs.forEach((tab) => {
			tab.active = false;
		});
		tab.active = true;
		this.contentActive = tab.url;
	}

  closeBrowser() {
    this.loadAnimation = 'animated zoomOutDown';
  }

  ngOnInit() {
  	this.loadAnimation = 'animated zoomInUp';
  }
}
