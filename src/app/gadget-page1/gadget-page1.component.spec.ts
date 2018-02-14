import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GadgetPage1Component } from './gadget-page1.component';

describe('GadgetPage1Component', () => {
  let component: GadgetPage1Component;
  let fixture: ComponentFixture<GadgetPage1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GadgetPage1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GadgetPage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
