import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadIssuesComponent } from './road-issues.component';

describe('RoadIssuesComponent', () => {
  let component: RoadIssuesComponent;
  let fixture: ComponentFixture<RoadIssuesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoadIssuesComponent]
    });
    fixture = TestBed.createComponent(RoadIssuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
