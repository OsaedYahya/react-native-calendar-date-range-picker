import React from "react";
import { StyleSheet, View, Button, Text } from "react-native";

import { Calendar } from "react-native-calendar-date-range-picker";

export default function App() {
  return (
      <Calendar
          subtitle={count => `${count} nights`}
          monthHeight={300}
          renderWeekTextComponent={weekdayTitle => (
              <Text style={styles.monthTextStyle} key={weekdayTitle}>
                {weekdayTitle}
              </Text>
          )}
          renderMonthTextComponent={monthName => (
              <Text>
                {`${monthName.format("MMMM")} ${monthName.clone().locale("en").format("YYYY")}`}
              </Text>
          )}
          renderFooterComponent={(handleDonePressed, daysDifference) => (
              <View style={{ alignItems: "center" }}>
                <View style={styles.dividerStyle} />
                <Button
                    onPress={handleDonePressed}
                    title={`Done (${daysDifference} selected)`}
                />
              </View>
          )}
      />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  monthTextStyle: {
    marginTop: 20,
    marginBottom: 10,
  },
  buttonStyle: {
    marginTop: 5,
  },
  dividerStyle: {
    width: "100%",
    height: 1,
    backgroundColor: "grey",
  },
});
