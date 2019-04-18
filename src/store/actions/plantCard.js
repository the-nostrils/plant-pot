import { TOGGLE_TRACKING_MODE, HELLO_WORLD } from './actionTypes';

export const toggleTrackingMode = isTrackingModeAuto => ({
  type: TOGGLE_TRACKING_MODE,
  payload: { isTrackingModeAuto: !isTrackingModeAuto }
});

export const helloWord = () => ({
  type: HELLO_WORLD,
  payload: { helloWord: 'Hello World' }
});
