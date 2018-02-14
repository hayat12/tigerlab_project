import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasePage5Component } from './purchase-page5.component';

describe('PurchasePage5Component', () => {
  let component: PurchasePage5Component;
  let fixture: ComponentFixture<PurchasePage5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchasePage5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasePage5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
