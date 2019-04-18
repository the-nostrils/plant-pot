import React from 'react';
import {
  View, StyleSheet, Text, TouchableOpacity
} from 'react-native';
import TabButton from '../TabButton/TabButton';

const S = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 118.48,
    elevation: 2,
    borderBottomRightRadius: 80
  },
  tabButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const TabBar = (props) => {
  const {
    renderIcon,
    getLabelText,
    activeTintColor,
    inactiveTintColor,
    onTabPress,
    onTabLongPress,
    getAccessibilityLabel,
    navigation
  } = props;

  const { routes, index: activeRouteIndex } = navigation.state;

  return (
    <View style={S.container}>
      {routes.map((route, routeIndex) => {
        const isRouteActive = routeIndex === activeRouteIndex;
        const tintColor = isRouteActive ? activeTintColor : inactiveTintColor;

        return (
          <TouchableOpacity
            key={routeIndex}
            style={S.tabButton}
            onPress={() => {
              onTabPress({ route });
            }}
            onLongPress={() => {
              onTabLongPress({ route });
            }}
            accessibilityLabel={getAccessibilityLabel({ route })}
          >
            {renderIcon({ route, focused: isRouteActive, tintColor })}
            <TabButton
              style={{
                width: 66.11,
                height: 63.36,
                borderBottomLeftRadius: 240,
                borderTopLeftRadius: 240,
                borderBottomRightRadius: 240,
                borderTopRightRadius: 240,
                borderWidth: 2,
                shadowColor: '#000000',
                shadowOffset: { width: 0, height: 5 },
                shadowOpacity: 0.16,
                shadowRadius: 5
              }}
            />
            <Text>{getLabelText({ route })}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabBar;
