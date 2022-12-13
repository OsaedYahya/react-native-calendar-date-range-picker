import React from "react";
import {Text} from "react-native";
import {CalendarDateRangePickerProps, DayStyles, SelectedRangeType} from "./src/Calendar/Calendar.types"

export {
    SelectedRangeType,
    DayStyles,
    DayProps,
    MonthProps,
    CalendarDateRangePickerProps
} from './src/Calendar/Calendar.types'


declare type CalendarRangePickerProps<C extends React.ElementType = typeof Text> = CalendarDateRangePickerProps;
declare const CalendarRangePicker: React.MemoExoticComponent<(<C extends React.ElementType<any> = typeof Text>({monthHeight, monthsCount, startIndex, initialSelectedRange, minDate, useGestureHandler, renderWeekTextComponent, renderFooterComponent, renderMonthTextComponent, onDonePressedCb, onChangeCb, theme}
: CalendarRangePickerProps<C>) => JSX.Element | null)>;
export default CalendarRangePicker;