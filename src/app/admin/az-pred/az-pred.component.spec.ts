import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AzPredComponent } from './az-pred.component';

describe('AzPredComponent', () => {
  let component: AzPredComponent;
  let fixture: ComponentFixture<AzPredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AzPredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AzPredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
