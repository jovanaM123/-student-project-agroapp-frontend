import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromenaSifreComponent } from './promena-sifre.component';

describe('PromenaSifreComponent', () => {
  let component: PromenaSifreComponent;
  let fixture: ComponentFixture<PromenaSifreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromenaSifreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromenaSifreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
