import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIfFormationComponent } from './ng-if-formation.component';

describe('NgIfFormationComponent', () => {
  let component: NgIfFormationComponent;
  let fixture: ComponentFixture<NgIfFormationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgIfFormationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgIfFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
