import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteagentComponent } from './deleteagent.component';

describe('DeleteagentComponent', () => {
  let component: DeleteagentComponent;
  let fixture: ComponentFixture<DeleteagentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteagentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteagentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
