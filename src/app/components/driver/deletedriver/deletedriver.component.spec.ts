import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletedriverComponent } from './deletedriver.component';

describe('DeletedriverComponent', () => {
  let component: DeletedriverComponent;
  let fixture: ComponentFixture<DeletedriverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletedriverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletedriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
