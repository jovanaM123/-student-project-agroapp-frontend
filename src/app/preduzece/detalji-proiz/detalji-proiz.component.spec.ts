import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaljiProizComponent } from './detalji-proiz.component';

describe('DetaljiProizComponent', () => {
  let component: DetaljiProizComponent;
  let fixture: ComponentFixture<DetaljiProizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetaljiProizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaljiProizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
