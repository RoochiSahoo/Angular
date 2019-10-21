import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerTextComponent } from './datepicker-text.component';

describe('DatepickerTextComponent', () => {
  let component: DatepickerTextComponent;
  let fixture: ComponentFixture<DatepickerTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatepickerTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
