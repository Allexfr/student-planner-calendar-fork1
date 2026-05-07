import { Component, Input, Output, EventEmitter, OnChanges, input } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-month-view',
  imports: [CommonModule],

  templateUrl: './month-view.html',
  styleUrl: './month-view.css'
})

export class MonthView implements OnChanges {

  //recieves the current month from the parent calendar page
  @Input() currentDate!: Date;

  //recieves the selected day from the parent calendar page
  @Input() selectedDate!: Date;

  //Sends the clicked day back to the parent calendar page
  @Output() dateSelected = new EventEmitter<Date>();

  //Sends all calendar cells displayed in the month grid
  calendarDays: Date[] = [];

  //Stores weekday labels shown at top of the grid
  weekDays: string[] = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat'
  ];

  //This will rebuild the calendar grid when the parent changes the month
  ngOnChanges(): void {
    this.buildCalendarDays();
  }

  //Builds the visible days for the month grid
  buildCalendarDays(): void {
    this.calendarDays = [];
  

  const year = this.currentDate.getFullYear();
  const month = this.currentDate.getMonth();

  const firstDayOfMonth = new Date(year, month, 1);
  const startDay = firstDayOfMonth.getDay();

  const startDate = new Date(year, month, 1 - startDay);

  for (let i = 0; i < 42; i++) {
    const day = new Date(startDate);
    day.setDate(startDate.getDate() + i);
    this.calendarDays.push(day);
  }
  }

  //sends the clicked date to the parent calendar page
  selectDate(date: Date): void {
    this.dateSelected.emit(date);
  }

  //Check if a day belongs to the currently displayed month
  isCurrentMonth(date: Date): boolean {
    return date.getMonth() === this.currentDate.getMonth();
  }

  // Checks if a day is the elected day
  isSelectedDate(date: Date): boolean {
    return date.toDateString() === this.selectedDate.toDateString();
  }

}
