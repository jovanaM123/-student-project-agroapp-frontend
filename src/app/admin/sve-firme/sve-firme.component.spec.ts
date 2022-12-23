import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SveFirmeComponent } from './sve-firme.component';

describe('SveFirmeComponent', () => {
  let component: SveFirmeComponent;
  let fixture: ComponentFixture<SveFirmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SveFirmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SveFirmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
