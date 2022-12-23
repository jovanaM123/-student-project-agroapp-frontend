import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SadniceComponent } from './sadnice.component';

describe('SadniceComponent', () => {
  let component: SadniceComponent;
  let fixture: ComponentFixture<SadniceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SadniceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SadniceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
