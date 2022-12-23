import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoljPocetnaComponent } from './polj-pocetna.component';

describe('PoljPocetnaComponent', () => {
  let component: PoljPocetnaComponent;
  let fixture: ComponentFixture<PoljPocetnaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoljPocetnaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoljPocetnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
