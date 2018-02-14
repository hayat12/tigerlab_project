import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YouPage1Component } from './you-page1.component';

describe('YouPage1Component', () => {
  let component: YouPage1Component;
  let fixture: ComponentFixture<YouPage1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YouPage1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YouPage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
