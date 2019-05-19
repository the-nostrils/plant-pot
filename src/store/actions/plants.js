import { ADD_PLANT, DELETE_PLANT } from './actionTypes';

export const addPlant = plant => ({
  type: ADD_PLANT,
  payload: {
    plant
  }
});

export const deletePlant = plant => ({
  type: DELETE_PLANT,
  payload: {
    plant
  }
});
