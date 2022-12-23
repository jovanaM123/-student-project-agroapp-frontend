import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SviPoljComponent } from './svi-polj.component';

describe('SviPoljComponent', () => {
  let component: SviPoljComponent;
  let fixture: ComponentFixture<SviPoljComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SviPoljComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SviPoljComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
