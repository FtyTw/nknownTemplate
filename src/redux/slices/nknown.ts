import { createSlice } from '@reduxjs/toolkit';
import { NknownState } from '@redux/types';

const initialState: NknownState = {
  swPerson: null,
  planets: [],
};

const nknownSlice = createSlice({
  name: 'nknown',
  initialState,
  reducers: {
    updateDefaultState: (state, action) => {
      state.swPerson = action.payload;
    },
    updateDefaultStateItems: (state, action) => {
      state.planets = action.payload;
    },
  },
});

const { reducer, actions } = nknownSlice;

export { reducer, actions };
