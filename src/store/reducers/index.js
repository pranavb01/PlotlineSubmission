// src/store/reducers/index.js
import { combineReducers } from '@reduxjs/toolkit';
import tooltipConfigReducer from './tooltipConfigSlice';

const rootReducer = combineReducers({
  tooltipConfig: tooltipConfigReducer,
  // Add your other reducers here
});

export default rootReducer;
