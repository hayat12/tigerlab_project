import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YouPage3Component } from './you-page3.component';

describe('YouPage3Component', () => {
  let component: YouPage3Component;
  let fixture: ComponentFixture<YouPage3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YouPage3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YouPage3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
