import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverstatusComponent } from './driverstatus.component';

describe('DriverstatusComponent', () => {
  let component: DriverstatusComponent;
  let fixture: ComponentFixture<DriverstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
