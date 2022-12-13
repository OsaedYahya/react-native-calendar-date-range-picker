import React, { memo, useEffect, useMemo, useState } from "react";
import { View } from "react-native";

import moment from "moment";

import { monthStyle } from "./Calendar.style";
import { MonthProps } from "./Calendar.types";

import Day from "./Day";

const Month = (props: MonthProps): JSX.Element => {
  const { year, month, onChangeCb, theme, minDate } = props;
  const [calendar, setCalendar] = useState<string[][]>([]);

  const { containerStyle } = useMemo(() => monthStyle, []);

  useEffect(() => {
    const tempCalendar = [];
    const startDate = moment([year, month]).startOf("month").startOf("week");

    const endDate = moment([year, month]).endOf("month");

    const day = startDate.subtract(1, "day");

    while (day.isBefore(endDate, "day")) {
      tempCalendar.push(
        Array(7)
          .fill(0)
          .map(() => day.add(1, "day").locale("en").format("DD")),
      );
    }
    setCalendar(tempCalendar);
  }, []);

  return (
    <>
      {calendar?.map((week, index) => (
        <View style={containerStyle} key={`week-${month}-${week[0]}-${index}`}>
          {week.map(currentDay => {
            return (
              <Day
                theme={theme}
                key={`${year}-${month + 1}-${currentDay}`}
                id={`${year}-${month + 1}-${currentDay}`}
                day={currentDay}
                week={index}
                onChangeCb={onChangeCb}
                year={year}
                month={month}
                minDate={minDate}
              />
            );
          })}
        </View>
      ))}
    </>
  );
};
export default memo(Month);
