import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingEvenimentComponent } from './binding-eveniment.component';

describe('BindingEvenimentComponent', () => {
  let component: BindingEvenimentComponent;
  let fixture: ComponentFixture<BindingEvenimentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BindingEvenimentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BindingEvenimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
