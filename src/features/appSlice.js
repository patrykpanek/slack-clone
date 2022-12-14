import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  roomId: null,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    enterRoom: (state, action) => {
      state.roomId = action.payload;
    },
  },
});

export default appSlice.reducer;
export const { enterRoom } = appSlice.actions;
export const selectRoomId = (state) => state.app.roomId;
