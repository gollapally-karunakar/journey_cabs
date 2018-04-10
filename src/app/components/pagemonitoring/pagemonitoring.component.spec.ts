import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagemonitoringComponent } from './pagemonitoring.component';

describe('PagemonitoringComponent', () => {
  let component: PagemonitoringComponent;
  let fixture: ComponentFixture<PagemonitoringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagemonitoringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagemonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
