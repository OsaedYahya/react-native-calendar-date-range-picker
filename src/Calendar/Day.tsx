import React, { useContext, useMemo } from "react";
import { Pressable, Text, View } from "react-native";

import moment from "moment";

import { CalendarContext } from "./Calendar";
import { dayStyle } from "./Calendar.style";
import { DayProps, DayStyles } from "./Calendar.types";

const Day = (props: DayProps): JSX.Element => {
  const {
    id,
    dayStyles: customDayStyles = {} as DayStyles,
    onChangeCb,
    month,
    year,
    week,
    day,
    minDate,
  } = props;
  const currentDate = moment(`${year}-${month + 1}-${day}`);
  const dates = useContext(CalendarContext);
  const start = dates?.startDate;
  const end = dates?.endDate;

  const currentMoment = minDate
    ? moment(minDate).subtract(1, "days")
    : moment().subtract(1, "days");
  const startMoment = moment(start);
  const endMoment = moment(end);
  const dayMoment = moment(id);
  const starting = currentDate.isSame(startMoment);
  const isBetween = currentDate?.isBetween(startMoment, endMoment);
  const ending = currentDate.isSame(endMoment);
  const isDayDisabled = dayMoment.isBefore(currentMoment);

  const handleOnPress = () => {
    if (start) {
      if (!end && !start.isSameOrAfter(dayMoment)) {
        onChangeCb({
          startDate: start,
          endDate: dayMoment,
        });
      } else {
        onChangeCb({
          startDate: dayMoment,
          endDate: null,
        });
      }
    } else {
      onChangeCb({
        startDate: dayMoment,
        endDate: null,
      });
    }
  };

  const isExtraDays = (weekDay: number, currentDay: number | string) => {
    if (weekDay === 0 && currentDay > 10) {
      return true;
    } else if (weekDay === 5 && currentDay < 10) {
      return true;
    } else return weekDay === 4 && currentDay < 10;
  };

  const {
    unselectedContainerStyle,
    startingContainerStyle,
    betweenContainerStyle,
    startingWithEndContainerStyle,
    endContainerStyle,
    endingContainerStyle,
    emptyDay,
    dayTextStyle,
    selectedDayTextStyle,
    startSelectedDayTextStyle,
    endSelectedDayTextStyle,
    disabledTextStyle,
  } = dayStyle;

  const dayStyles = isDayDisabled
    ? [disabledTextStyle, customDayStyles.disabledTextStyle]
    : starting && !end
    ? [startSelectedDayTextStyle, customDayStyles.startSelectedDayTextStyle]
    : starting
    ? [startSelectedDayTextStyle, customDayStyles.startSelectedDayTextStyle]
    : isBetween
    ? [selectedDayTextStyle, customDayStyles.selectedDayTextStyle]
    : !end && ending
    ? [endSelectedDayTextStyle, customDayStyles.endSelectedDayTextStyle]
    : ending
    ? [endSelectedDayTextStyle, customDayStyles.endSelectedDayTextStyle]
    : dayTextStyle;

  const containerStyle = useMemo(
    () =>
      starting && !end
        ? [startingWithEndContainerStyle, customDayStyles.startingWithEndContainerStyle]
        : starting
        ? [startingContainerStyle, customDayStyles.startingContainerStyle]
        : isBetween
        ? [betweenContainerStyle, customDayStyles.betweenContainerStyle]
        : !end && ending
        ? [endContainerStyle, customDayStyles.endContainerStyle]
        : ending
        ? [endingContainerStyle, customDayStyles.endingContainerStyle]
        : [unselectedContainerStyle, customDayStyles.unselectedContainerStyle],
    [
      betweenContainerStyle,
      customDayStyles.betweenContainerStyle,
      customDayStyles.endContainerStyle,
      customDayStyles.endingContainerStyle,
      customDayStyles.unselectedContainerStyle,
      customDayStyles.startingContainerStyle,
      customDayStyles.startingWithEndContainerStyle,
      end,
      endContainerStyle,
      ending,
      endingContainerStyle,
      isBetween,
      unselectedContainerStyle,
      starting,
      startingContainerStyle,
      startingWithEndContainerStyle,
    ],
  );

  if (isExtraDays(week, day)) {
    return <View key={`${id}-disabled`} style={emptyDay} />;
  }

  return (
    <Pressable disabled={isDayDisabled} style={containerStyle} onPress={handleOnPress}>
      <Text style={dayStyles}>{day}</Text>
    </Pressable>
  );
};
export default Day;
