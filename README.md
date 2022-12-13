# react-native-calendar-date-range-picker
React native calendar range picker
[![Version](https://img.shields.io/npm/v/react-native-calendar-date-range-picker.svg)](https://www.npmjs.com/package/react-native-calendars)

### Preview

<img src="https://user-images.githubusercontent.com/69788216/207125617-049ed8d5-15ec-4c9f-af58-fbaa5c81c911.gif" width="20%" height="20%">

## Getting Started

### Installation

npm
```bash
npm i react-native-calendar-date-range-picker
````
Yarn
```
yarn add react-native-calendar-date-range-picker
```

### Props


| Property | Required | Type | Default | Description |
|-------------|----|----------|-------|--------------------------------------------------------------|
| onChangeCb | No | (SelectedRangeType) => void | () => void | Function that gets triggered on any selection change |
| onDonePressedCb | No | (SelectedRangeType) => void | () => void | When done button is pressed |
| theme | No | DayStyles | {} | styles for calendar/day components|
| monthHeight| No  | Number | 300 | Approximate height for each month (along with days) |
| monthsCount | No | Number | 12 | Number of months starting from minDate |
| minDate | No | Moment | undefined | Starting date
| initialSelectedRange | No | SelectedRangeType | {startDate: moment(),endDate: moment().add(1, "day"),} | initially selected range |
| useGestureHandler | No | Boolean | false | Enable if Flatlist should be imported from "react-native-gesture-handler" |
| renderWeekTextComponent | No | JSX.Element | <Text /> | Function that returns custom render for each week |
| renderMonthTextComponent | No | JSX.Element | <Text /> | Function that returns custom render for each month title |
| renderFooterComponent | No | JSX.Element | <Button /> | Function that returns custom render footer component |


## Types

```
DayStyles {
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
```
```
SelectedRangeType {
  startDate: Moment;
  endDate: Moment | null;
}
```

