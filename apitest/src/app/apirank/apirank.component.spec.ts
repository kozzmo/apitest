import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApirankComponent } from './apirank.component';

describe('ApirankComponent', () => {
  let component: ApirankComponent;
  let fixture: ComponentFixture<ApirankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApirankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApirankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
