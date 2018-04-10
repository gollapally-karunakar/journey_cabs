import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanclevehicleComponent } from './canclevehicle.component';

describe('CanclevehicleComponent', () => {
  let component: CanclevehicleComponent;
  let fixture: ComponentFixture<CanclevehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanclevehicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanclevehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
