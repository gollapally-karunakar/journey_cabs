import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateagentComponent } from './updateagent.component';

describe('UpdateagentComponent', () => {
  let component: UpdateagentComponent;
  let fixture: ComponentFixture<UpdateagentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateagentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateagentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
