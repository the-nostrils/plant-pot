import React, { Component } from 'react';
import {
  Alert, StyleSheet, View, Text
} from 'react-native';
import PropTypes from 'prop-types';

import BaseText from '../UI/BaseText/BaseText';
import DayColumn from '../DayColumn/DayColumn';
import TrackingModeSwitch from '../TrackingModeSwitch/TrackingModeSwitch';

export default class TrackingCalendar extends Component {
  MONTH_NAMES = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  WEEKDAYS_INITIALS = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

  state = {
    isTrackingModeAuto: true,
    currentMonth: undefined,
    currentDate: undefined,
    thisWeek: []
  };

  componentDidMount() {
    this.setState({
      currentDate: this.getCurrentDate(),
      currentMonth: this.getCurrentMonth(),
      thisWeek: this.getThisWeek()
    });
  }

  getCurrentMonth = () => {
    const date = new Date();

    return this.MONTH_NAMES[date.getMonth()].toUpperCase();
  };

  getCurrentDate = () => {
    const date = new Date();

    return date.getDate();
  };

  getThisWeek = () => {
    // Get the current date
    const currentDate = new Date();

    // Find the which date is the beginning of this week
    const first = currentDate.getDate() - currentDate.getDay() + 1;

    return this.WEEKDAYS_INITIALS.map(
      (dayName, index) => new Date(currentDate.setDate(first + index))
    );
  };

  toggleSwitchHandler = () => {
    const { isTrackingModeAuto } = this.state;

    this.setState({ isTrackingModeAuto: !isTrackingModeAuto });
  };

  render() {
    const {
      currentDate, currentMonth, isTrackingModeAuto, thisWeek
    } = this.state;

    const thisWeekList = thisWeek.map(date => (
      <DayColumn
        key={date}
        dayNumber={date.getDate()}
        dayNameInitial={date.toDateString().charAt(0)}
        isDayTracked
        style={{ margin: 8 }}
      />
    ));

    return (
      <View style={styles.container}>
        <BaseText
          style={{
            fontFamily: 'SFCompactDisplay-Heavy',
            fontSize: 20,
            color: '#004734',
            letterSpacing: 1,
            textAlign: 'left',
            margin: 10
          }}
        >
          {currentMonth}
        </BaseText>
        <View style={styles.thisWeekContainer}>{thisWeekList}</View>
        <View style={styles.trackingSwitchContainer}>
          <TrackingModeSwitch
            isAuto={isTrackingModeAuto}
            onToggleSwitch={this.toggleSwitchHandler}
            style={{ height: 32 }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5'
  },
  trackingSwitchContainer: {
    width: 240
    // height: 32
  },
  thisWeekContainer: {
    flexDirection: 'row'
  }
});

TrackingCalendar.propTypes = {};
