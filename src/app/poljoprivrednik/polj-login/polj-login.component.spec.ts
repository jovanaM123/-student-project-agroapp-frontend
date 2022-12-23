import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoljLoginComponent } from './polj-login.component';

describe('PoljLoginComponent', () => {
  let component: PoljLoginComponent;
  let fixture: ComponentFixture<PoljLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoljLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoljLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
