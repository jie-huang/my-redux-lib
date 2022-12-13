import { createAction, createReducer, createSlice } from '@reduxjs/toolkit';

export interface LibCounterState {
  value: number;
}

const initialState: LibCounterState = {
  value: 0,
};

export interface Store {
  libcounter: unknown | LibCounterState
}

export const libCounterSlice = createSlice({
  name: 'libcounter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});

export const { increment } = libCounterSlice.actions;

export const selectCount = (state: Store) => (state.libcounter as LibCounterState).value;

export default libCounterSlice.reducer;
