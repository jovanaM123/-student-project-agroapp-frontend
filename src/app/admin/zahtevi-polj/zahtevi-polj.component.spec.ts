import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZahteviPoljComponent } from './zahtevi-polj.component';

describe('ZahteviPoljComponent', () => {
  let component: ZahteviPoljComponent;
  let fixture: ComponentFixture<ZahteviPoljComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZahteviPoljComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZahteviPoljComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
