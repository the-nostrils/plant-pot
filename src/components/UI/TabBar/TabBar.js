import React from 'react';
import {
  View, StyleSheet, Text, TouchableOpacity
} from 'react-native';
import TabButton from '../TabButton/TabButton';

const S = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 120,
    borderBottomLeftRadius: 80,
    backgroundColor: '#F5F5F5',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.16,
    shadowRadius: 6,
    zIndex: 800
  },
  tabButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
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
        const { routeName } = route;

        return (
          <TouchableOpacity
            key={routeIndex}
            style={[S.tabButton, isRouteActive ? { zIndex: 999 } : null]}
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
              style={[
                {
                  position: 'absolute',
                  backgroundColor: '#F5F5F5'
                },
                routeName === 'Community' && isRouteActive && activeRouteIndex === 1
                  ? { left: 10 }
                  : null,
                routeName === 'Community' && !isRouteActive && activeRouteIndex === 0
                  ? { left: 63 }
                  : null,
                routeName === 'Community' && !isRouteActive && activeRouteIndex === 2
                  ? { left: 7 }
                  : null,
                routeName === 'Plantpedia' && isRouteActive && activeRouteIndex === 2
                  ? { left: -27 }
                  : null
              ]}
              routeName={routeName}
            />
            {isRouteActive ? (
              <View
                style={[
                  {
                    position: 'absolute',
                    top: 39,
                    left: 80,
                    width: 105,
                    height: 40,
                    backgroundColor: '#4AA972',
                    borderRadius: 24,
                    justifyContent: 'center',
                    alignItems: 'center'
                  },
                  routeName === 'Plantpedia' && isRouteActive && activeRouteIndex === 2
                    ? { left: 16 }
                    : null,
                  routeName === 'Community' && isRouteActive && activeRouteIndex === 1
                    ? { left: 53 }
                    : null
                ]}
              >
                <Text
                  style={[
                    {
                      position: 'absolute',
                      left: 22,
                      color: '#CFE8DA',
                      fontFamily: 'SFCompactDisplay-Regular',
                      fontSize: 13,
                      letterSpacing: -0.08,
                      textAlign: 'left'
                    },
                    routeName === 'Plantpedia' && isRouteActive && activeRouteIndex === 2
                      ? { left: 28 }
                      : null,
                    routeName === 'Community' && isRouteActive && activeRouteIndex === 1
                      ? { left: 27 }
                      : null,
                    routeName === 'Tracking' && isRouteActive && activeRouteIndex === 0
                      ? { left: 25 }
                      : null
                  ]}
                >
                  {getLabelText({ route })}
                </Text>
              </View>
            ) : null}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabBar;
