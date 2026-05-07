import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventTooltip } from './event-tooltip';

describe('EventTooltip', () => {
  let component: EventTooltip;
  let fixture: ComponentFixture<EventTooltip>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventTooltip],
    }).compileComponents();

    fixture = TestBed.createComponent(EventTooltip);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
