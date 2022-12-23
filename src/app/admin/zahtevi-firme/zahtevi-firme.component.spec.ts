import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZahteviFirmeComponent } from './zahtevi-firme.component';

describe('ZahteviFirmeComponent', () => {
  let component: ZahteviFirmeComponent;
  let fixture: ComponentFixture<ZahteviFirmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZahteviFirmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZahteviFirmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
