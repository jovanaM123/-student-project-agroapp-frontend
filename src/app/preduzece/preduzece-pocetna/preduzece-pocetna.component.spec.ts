import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreduzecePocetnaComponent } from './preduzece-pocetna.component';

describe('PreduzecePocetnaComponent', () => {
  let component: PreduzecePocetnaComponent;
  let fixture: ComponentFixture<PreduzecePocetnaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreduzecePocetnaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreduzecePocetnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
