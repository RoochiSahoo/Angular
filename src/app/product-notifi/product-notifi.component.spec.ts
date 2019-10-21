import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductNotifiComponent } from './product-notifi.component';

describe('ProductNotifiComponent', () => {
  let component: ProductNotifiComponent;
  let fixture: ComponentFixture<ProductNotifiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductNotifiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductNotifiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
