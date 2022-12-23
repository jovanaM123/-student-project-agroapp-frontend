import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreparatiComponent } from './preparati.component';

describe('PreparatiComponent', () => {
  let component: PreparatiComponent;
  let fixture: ComponentFixture<PreparatiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreparatiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreparatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
