import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GadgetPage3Component } from './gadget-page3.component';

describe('GadgetPage3Component', () => {
  let component: GadgetPage3Component;
  let fixture: ComponentFixture<GadgetPage3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GadgetPage3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GadgetPage3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
