/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TabEasterEggsComponent } from './tab-easter-eggs.component';

describe('TabEasterEggsComponent', () => {
  let component: TabEasterEggsComponent;
  let fixture: ComponentFixture<TabEasterEggsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabEasterEggsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabEasterEggsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
