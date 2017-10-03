import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpolateParamOptionalComponent } from './interpolate-param-optional.component';

describe('InterpolateParamOptionalComponent', () => {
  let component: InterpolateParamOptionalComponent;
  let fixture: ComponentFixture<InterpolateParamOptionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterpolateParamOptionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterpolateParamOptionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
