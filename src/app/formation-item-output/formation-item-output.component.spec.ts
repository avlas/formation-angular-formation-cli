import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationItemOutputComponent } from './formation-item-output.component';

describe('FormationItemOutputComponent', () => {
  let component: FormationItemOutputComponent;
  let fixture: ComponentFixture<FormationItemOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormationItemOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormationItemOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
