import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpolateOptionalComponent } from './interpolate-optional.component';

describe('InterpolateOptionalComponent', () => {
  let component: InterpolateOptionalComponent;
  let fixture: ComponentFixture<InterpolateOptionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterpolateOptionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterpolateOptionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
