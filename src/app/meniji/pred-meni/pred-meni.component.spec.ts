import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredMeniComponent } from './pred-meni.component';

describe('PredMeniComponent', () => {
  let component: PredMeniComponent;
  let fixture: ComponentFixture<PredMeniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredMeniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredMeniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
