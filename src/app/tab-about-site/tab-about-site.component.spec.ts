/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TabAboutSiteComponent } from './tab-about-site.component';

describe('TabAboutSiteComponent', () => {
  let component: TabAboutSiteComponent;
  let fixture: ComponentFixture<TabAboutSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabAboutSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabAboutSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
