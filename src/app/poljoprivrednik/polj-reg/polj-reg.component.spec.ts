import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoljRegComponent } from './polj-reg.component';

describe('PoljRegComponent', () => {
  let component: PoljRegComponent;
  let fixture: ComponentFixture<PoljRegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoljRegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoljRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
