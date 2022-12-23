import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SadjenjeComponent } from './sadjenje.component';

describe('SadjenjeComponent', () => {
  let component: SadjenjeComponent;
  let fixture: ComponentFixture<SadjenjeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SadjenjeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SadjenjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
