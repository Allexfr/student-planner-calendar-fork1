// these events are for the interface they allow for these specific values to be used when making an event
export interface CalendarEvent {
    id?: string;
    userId: string;
    title: string;
    date: string;
    dayOfWeek: string;
    startTime: string;
    endTime: string;
    color: string;
    details: string;
}

