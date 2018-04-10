import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverhistoryComponent } from './driverhistory.component';

describe('DriverhistoryComponent', () => {
  let component: DriverhistoryComponent;
  let fixture: ComponentFixture<DriverhistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverhistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
