import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasePage4Component } from './purchase-page4.component';

describe('PurchasePage4Component', () => {
  let component: PurchasePage4Component;
  let fixture: ComponentFixture<PurchasePage4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchasePage4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasePage4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
