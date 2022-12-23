import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreduzeceLoginComponent } from './preduzece-login.component';

describe('PreduzeceLoginComponent', () => {
  let component: PreduzeceLoginComponent;
  let fixture: ComponentFixture<PreduzeceLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreduzeceLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreduzeceLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
