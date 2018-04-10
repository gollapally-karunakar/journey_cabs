import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancledriverComponent } from './cancledriver.component';

describe('CancledriverComponent', () => {
  let component: CancledriverComponent;
  let fixture: ComponentFixture<CancledriverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancledriverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancledriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
