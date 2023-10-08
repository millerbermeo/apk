import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';

const MyCalendar = () => {
  return (
    <View style={styles.container}>
      <Calendar style={styles.celendar}

        markedDates={{
          '2023-10-05': { selected: true, marked: true },
          '2023-10-12': { selected: true, marked: true, selectedColor: 'blue' },
          '2023-10-20': { marked: true, dotColor: 'red' },
        }}
        theme={{
          backgroundColor: 'rgba(166, 3, 3, 0.6)',
          calendarBackground: '#ffffff',
          selectedDayBackgroundColor: 'blue',
          selectedDayTextColor: '#ffffff',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    padding: 10,
    marginTop: 20,
  },

  
});

export default MyCalendar;

