import { HELLO_WORLD, TOGGLE_TRACKING_MODE } from '../actions/actionTypes';

const initialState = {
  isTrackingModeAuto: true
};

const reducer = (state = initialState, action) => {
  const { isTrackingModeAuto } = action.payload;

  switch (action.type) {
    case TOGGLE_TRACKING_MODE:
      return {
        ...state,
        isTrackingModeAuto
      };
    default:
      return state;
  }
};

export default reducer;
