import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
	headerAnimation = '';
	mailAnimation = '';
	linkedInAnimation = '';

  ngOnInit() {
  	this.headerAnimation = 'animated fadeInRight';
  	this.mailAnimation = 'animated fadeInRight';
	this.linkedInAnimation = 'animated fadeInRight';
  }
}
