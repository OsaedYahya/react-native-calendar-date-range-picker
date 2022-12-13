import { TextStyle, ViewStyle } from "react-native";

import { Moment } from "moment";

interface CalendarInterface {
  monthHeight?: number;
  monthsCount?: number;
  startIndex?: number;
  initialSelectedRange?: SelectedRangeType;
  minDate?: Moment;
  useGestureHandler?: boolean;
  renderWeekTextComponent?: (_title: string) => JSX.Element;
  renderFooterComponent?: (_onPress: () => void, _count: number) => JSX.Element;
  renderMonthTextComponent?: (_title: Moment) => JSX.Element;
  onDonePressedCb?: (_selectedDate: SelectedRangeType) => void;
  onChangeCb?: (_selectedDate: SelectedRangeType) => void;
  dayStyles?: DayStyles;
}

export type DayProps = {
  id: string;
  onChangeCb: (_selectedDate: SelectedRangeType) => void;
  month: number;
  year: number;
  week: number;
  day: number | string;
  minDate?: Moment;
  dayStyles?: DayStyles;
};

export interface DayStyles {
  unselectedContainerStyle?: ViewStyle;
  endContainerStyle?: ViewStyle;
  startingContainerStyle?: ViewStyle;
  startingWithEndContainerStyle?: ViewStyle;
  endingContainerStyle?: ViewStyle;
  betweenContainerStyle?: ViewStyle;
  disabledTextStyle?: TextStyle;
  emptyDay?: TextStyle;
  dayTextStyle?: TextStyle;
  selectedDayTextStyle?: TextStyle;
  startSelectedDayTextStyle?: TextStyle;
  endSelectedDayTextStyle?: TextStyle;
}

export interface SelectedRangeType {
  startDate: Moment;
  endDate: Moment | null;
}

export type MonthProps = {
  year: number;
  month: number;
  minDate?: Moment;
  dayStyles?: DayStyles;
  onChangeCb: (_selectedDate: SelectedRangeType) => void;
};

export type CalendarDateRangePickerProps = CalendarInterface;
