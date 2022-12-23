import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreduzeceRegistracijaComponent } from './preduzece-registracija.component';

describe('PreduzeceRegistracijaComponent', () => {
  let component: PreduzeceRegistracijaComponent;
  let fixture: ComponentFixture<PreduzeceRegistracijaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreduzeceRegistracijaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreduzeceRegistracijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
