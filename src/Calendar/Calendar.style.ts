import { StyleSheet } from "react-native";

const calendarStyle = (monthHeight: number) =>
  StyleSheet.create({
    containerStyle: {
      height: monthHeight,
      overflow: "hidden",
    },
    monthNameContainerStyle: {
      flexDirection: "row",
      paddingHorizontal: 20,
      marginBottom: 10,
    },
    monthNameStyle: {
      flex: 1,
    },
  });

export const calendarDefaultStyles = StyleSheet.create({
  monthNameTextComponentStyle: {
    textAlign: "center",
    marginVertical: 10,
    fontSize: 20,
  },
  monthNameStyle: {
    flex: 1,
  },
});
export const monthStyle = StyleSheet.create({
  containerStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    flex: 1,
  },
});

export const dayStyle = StyleSheet.create({
  nothingContainerStyle: {
    marginTop: 4,
    justifyContent: "center",
    flex: 1,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    backgroundColor: "transparent",
  },
  endContainerStyle: {
    marginTop: 4,
    justifyContent: "center",
    flex: 1,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    backgroundColor: "#43A349",
  },
  startingContainerStyle: {
    marginTop: 4,
    justifyContent: "center",
    flex: 1,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    backgroundColor: "#43A349",
  },
  startingWithEndContainerStyle: {
    marginTop: 4,
    justifyContent: "center",
    flex: 1,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    backgroundColor: "#43A349",
  },
  endingContainerStyle: {
    marginTop: 4,
    justifyContent: "center",
    flex: 1,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    backgroundColor: "#43A349",
  },
  betweenContainerStyle: {
    marginTop: 4,
    justifyContent: "center",
    flex: 1,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    backgroundColor: "#7fe274",
  },
  disabledTextStyle: {
    color: "#43A349",
    textAlign: "center",
    padding: 5,
    fontSize: 13,
  },
  emptyDay: {
    marginTop: 4,
    justifyContent: "center",
    flex: 1,
  },
  dayTextStyle: {
    textAlign: "center",
    color: "#000",
    padding: 5,
    fontSize: 13,
  },
  selectedDayTextStyle: {
    textAlign: "center",
    color: "#fff",
    padding: 5,
    fontSize: 13,
  },
  startSelectedDayTextStyle: {
    textAlign: "center",
    color: "#fff",
    padding: 5,
    fontSize: 13,
  },
  endSelectedDayTextStyle: {
    textAlign: "center",
    color: "#fff",
    padding: 5,
    fontSize: 13,
  },
});

export default calendarStyle;
