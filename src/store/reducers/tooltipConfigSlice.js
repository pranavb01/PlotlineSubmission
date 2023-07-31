// src/store/reducers/tooltipConfigSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const tooltipConfigSlice = createSlice({
  name: 'tooltipConfig',
  initialState,
  reducers: {
    updateTooltipConfig: (state, action) => {
      const { target, config } = action.payload;
      state[target] = config;
    },
  },
});

export const { updateTooltipConfig } = tooltipConfigSlice.actions;
export default tooltipConfigSlice.reducer;
