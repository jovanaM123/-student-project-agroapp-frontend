import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SviProizvodiComponent } from './svi-proizvodi.component';

describe('SviProizvodiComponent', () => {
  let component: SviProizvodiComponent;
  let fixture: ComponentFixture<SviProizvodiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SviProizvodiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SviProizvodiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
