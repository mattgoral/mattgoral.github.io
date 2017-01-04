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
            title: 'easter eggs!',
            icon: 'fa-smile-o',
            url: 'app-tab-easter-eggs',
            active: false
        }, {
            title: 'about this site',
            icon: 'fa-info-circle',
            url: 'app-tab-about-site',
            active: false
        }, {
            title: 'welcome',
            icon: 'fa-star',
            url: 'app-tab-welcome',
            active: true
    }];

	selectTab(tab) {
		this.tabs.forEach((tab) => {
			tab.active = false;
		});
		tab.active = true;
		this.contentActive = tab.url;
	}

  ngOnInit() {
  	this.loadAnimation = 'animated fadeInRight';
  }
}
