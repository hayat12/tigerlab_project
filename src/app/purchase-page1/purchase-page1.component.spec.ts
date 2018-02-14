import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasePage1Component } from './purchase-page1.component';

describe('PurchasePage1Component', () => {
  let component: PurchasePage1Component;
  let fixture: ComponentFixture<PurchasePage1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchasePage1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasePage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
