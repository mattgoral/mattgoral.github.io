import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
	loadAnimation = '';
	myPicture = '';
	hiText = '';

  ngOnInit() {
  	this.loadAnimation = 'animated fadeInRight';
  	this.myPicture = 'animated fadeInRight';
  	this.hiText = 'animated tada';
  }
}
