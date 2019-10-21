import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaraousleTestComponent } from './caraousle-test.component';

describe('CaraousleTestComponent', () => {
  let component: CaraousleTestComponent;
  let fixture: ComponentFixture<CaraousleTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaraousleTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaraousleTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
