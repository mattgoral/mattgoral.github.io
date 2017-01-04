import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	loadAnimation = '';

	tabs = [{
            title: 'easter eggs!',
            icon: 'fa-smile-o',
            url: 'tab-easter-eggs.tpl.html',
            active: false
        }, {
            title: 'about this site',
            icon: 'fa-info-circle',
            url: 'tab-about.tpl.html',
            active: false
        }, {
            title: 'welcome',
            icon: 'fa-star',
            url: 'tab-welcome.tpl.html',
            active: true
    }];

	selectTab(tab) {
		this.tabs.forEach((tab) => {
			tab.active = false;
		});
		tab.active = true;
	}

  ngOnInit() {
  	this.loadAnimation = 'animated fadeInRight';
  }
}
