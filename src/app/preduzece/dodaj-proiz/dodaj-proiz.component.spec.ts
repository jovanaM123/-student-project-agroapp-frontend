import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajProizComponent } from './dodaj-proiz.component';

describe('DodajProizComponent', () => {
  let component: DodajProizComponent;
  let fixture: ComponentFixture<DodajProizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DodajProizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DodajProizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
