import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoljMeniComponent } from './polj-meni.component';

describe('PoljMeniComponent', () => {
  let component: PoljMeniComponent;
  let fixture: ComponentFixture<PoljMeniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoljMeniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoljMeniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
