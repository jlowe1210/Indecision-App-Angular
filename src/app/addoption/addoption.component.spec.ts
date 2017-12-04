import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddoptionComponent } from './addoption.component';

describe('AddoptionComponent', () => {
  let component: AddoptionComponent;
  let fixture: ComponentFixture<AddoptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddoptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
