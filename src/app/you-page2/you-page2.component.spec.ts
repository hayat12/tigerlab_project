import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YouPage2Component } from './you-page2.component';

describe('YouPage2Component', () => {
  let component: YouPage2Component;
  let fixture: ComponentFixture<YouPage2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YouPage2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YouPage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
