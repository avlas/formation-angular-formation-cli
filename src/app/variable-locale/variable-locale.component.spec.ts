import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VariableLocaleComponent } from './variable-locale.component';

describe('VariableLocaleComponent', () => {
  let component: VariableLocaleComponent;
  let fixture: ComponentFixture<VariableLocaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VariableLocaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VariableLocaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
