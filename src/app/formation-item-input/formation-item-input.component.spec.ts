import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationItemInputComponent } from './formation-item-input.component';

describe('FormationItemInputComponent', () => {
  let component: FormationItemInputComponent;
  let fixture: ComponentFixture<FormationItemInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormationItemInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormationItemInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
