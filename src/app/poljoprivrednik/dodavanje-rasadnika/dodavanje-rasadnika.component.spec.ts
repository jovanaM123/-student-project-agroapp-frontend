import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DodavanjeRasadnikaComponent } from './dodavanje-rasadnika.component';

describe('DodavanjeRasadnikaComponent', () => {
  let component: DodavanjeRasadnikaComponent;
  let fixture: ComponentFixture<DodavanjeRasadnikaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DodavanjeRasadnikaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DodavanjeRasadnikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
