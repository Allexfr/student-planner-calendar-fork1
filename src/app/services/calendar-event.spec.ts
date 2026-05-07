import { TestBed } from '@angular/core/testing';

import { CalendarEvent } from './calendar-event';

describe('CalendarEvent', () => {
  let service: CalendarEvent;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalendarEvent);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
