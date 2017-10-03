import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingProprieteComponent } from './binding-propriete.component';

describe('BindingProprieteComponent', () => {
  let component: BindingProprieteComponent;
  let fixture: ComponentFixture<BindingProprieteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BindingProprieteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BindingProprieteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
