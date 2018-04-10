import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletevehicleComponent } from './deletevehicle.component';

describe('DeletevehicleComponent', () => {
  let component: DeletevehicleComponent;
  let fixture: ComponentFixture<DeletevehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletevehicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletevehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
