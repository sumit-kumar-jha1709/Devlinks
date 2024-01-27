import { configureStore } from '@reduxjs/toolkit';

// Action types
const UPDATE_USER_DATA = 'UPDATE_USER_DATA';

// Action creators
export const updateUserData = (newData) => ({
  type: UPDATE_USER_DATA,
  payload: newData,
});

// Initial state
const initialState = {
  userData: {
    profilePhoto: '',
    firstName: '',
    lastName: '',
    email: '',
  },
};


// Reducer
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER_DATA:
      return {
        ...state,
        userData: action.payload,
      };
    default:
      return state;
  }
};

// Create store
const store = configureStore({
  reducer: rootReducer,
});

export default store;
