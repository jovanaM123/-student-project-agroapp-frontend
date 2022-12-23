import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KuririComponent } from './kuriri.component';

describe('KuririComponent', () => {
  let component: KuririComponent;
  let fixture: ComponentFixture<KuririComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KuririComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KuririComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
