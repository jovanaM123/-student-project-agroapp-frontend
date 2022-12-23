import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AzPoljComponent } from './az-polj.component';

describe('AzPoljComponent', () => {
  let component: AzPoljComponent;
  let fixture: ComponentFixture<AzPoljComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AzPoljComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AzPoljComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
