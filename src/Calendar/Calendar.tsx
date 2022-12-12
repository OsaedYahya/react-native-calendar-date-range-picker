import React, { createContext, memo, useCallback, useMemo, useState } from "react";
import { Button, Pressable, Text, View } from "react-native";

import moment, { Moment } from "moment";

import "moment/min/locales";

import calendarStyle, { calendarDefaultStyles } from "./Calendar.style";
import { CalendarTypes, SelectedRangeType } from "./Calendar.types";
import Month from "./Month";

const INITIAL_SELECTED_DATE = {
  startDate: moment(),
  endDate: moment().add(1, "day"),
};
export const CalendarContext = createContext<SelectedRangeType>(INITIAL_SELECTED_DATE);

const Calendar = (props: CalendarTypes): JSX.Element => {
  const { monthNameTextComponentStyle } = calendarDefaultStyles;

  const {
    onChangeCb = () => undefined,
    onDonePressedCb = () => undefined,
    useGestureHandler,
    monthHeight = 300,
    monthsCount = 12,
    initialSelectedRange = INITIAL_SELECTED_DATE,
    startIndex = 0,
    minDate,
    dayStyles,
    renderWeekTextComponent = (monthTitle: string) => <Text>{monthTitle}</Text>,
    renderMonthTextComponent = (month: Moment) => (
        <Text style={monthNameTextComponentStyle}>{month.format("MMMM")}</Text>
    ),
    renderFooterComponent = (onPress: () => void, count: string) => (
        <Button title={`Done (${count}) selected`} onPress={onPress} />
    ),
  } = props || {};

  const FlatListComponent = useGestureHandler
      ? require("react-native-gesture-handler").FlatList
      : require("react-native").FlatList;

  const [selectedDate, setSelectedDate] = useState<SelectedRangeType>(initialSelectedRange);

  const months: Moment[] = Array.from({ length: monthsCount }, (_, id) =>
      moment().add(id, "months"),
  );

  const { containerStyle, monthNameContainerStyle, monthNameStyle } = useMemo(
      () => calendarStyle(monthHeight),
      [monthHeight],
  );

  const handleMonthChanged = useCallback(
      (dates: SelectedRangeType) => {
        onChangeCb(dates);
        setSelectedDate(dates);
      },
      [onChangeCb],
  );

  const renderMonths = useCallback(
      ({ item }: { item: Moment }) => (
          <Pressable style={containerStyle}>
            {renderMonthTextComponent(item)}
            <View style={monthNameContainerStyle}>
              {moment.weekdaysShort().map(weekdayTitle => (
                  <View key={weekdayTitle} style={monthNameStyle}>
                    {renderWeekTextComponent(weekdayTitle)}
                  </View>
              ))}
            </View>
            <Month
                dayStyles={dayStyles}
                onChangeCb={handleMonthChanged}
                month={item.get("month")}
                year={item.get("year")}
                minDate={minDate}
            />
          </Pressable>
      ),
      [
        containerStyle,
        renderMonthTextComponent,
        monthNameContainerStyle,
        dayStyles,
        handleMonthChanged,
        minDate,
        monthNameStyle,
        renderWeekTextComponent,
      ],
  );

  const getItemLayout = useCallback(
      (i: Moment[] | null | undefined, index: number) => {
        return {
          index,
          length: monthHeight,
          offset: index * monthHeight,
        };
      },
      [monthHeight],
  );

  const keyExtractor = useCallback((item: Moment) => `${item.format("MMMM-YYYY")}`, []);

  const handleDonePressed = useCallback(() => {
    const dates = {
      startDate: selectedDate?.startDate,
      endDate: selectedDate?.endDate || moment(selectedDate?.startDate).add(1, "day"),
    };
    onDonePressedCb(dates);
  }, [onDonePressedCb, selectedDate]);

  const daysDifference = useMemo(
      () => Math.abs(selectedDate.endDate?.diff(selectedDate.startDate, "days") || 1),
      [selectedDate],
  );

  return (
      <CalendarContext.Provider value={selectedDate}>
        <FlatListComponent
            keyExtractor={keyExtractor}
            getItemLayout={getItemLayout}
            renderItem={renderMonths}
            data={months}
            initialScrollIndex={startIndex}
        />
        {renderFooterComponent(handleDonePressed, daysDifference)}
      </CalendarContext.Provider>
  );
};
export default memo(Calendar);
