import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecycleOnchangeComponent } from './lifecycle-onchange.component';

describe('LifecycleOnchangeComponent', () => {
  let component: LifecycleOnchangeComponent;
  let fixture: ComponentFixture<LifecycleOnchangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifecycleOnchangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifecycleOnchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
