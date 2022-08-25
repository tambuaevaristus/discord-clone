import { createSlice } from '@reduxjs/toolkit';
export const appSlice = createSlice({
  name: 'app',
  initialState : {
    channelId: "app",
    channelName: null,
  },
  reducers: {
    login: (state, action) => {
      state.value += action.payload;
    },
    logout: (state) =>{
      state.app = null;
    },
  },
});

export const { setChannelId} = appSlice.actions;


export const selectChannelId = (state) => state.app.channelId;
export const selectChannelName = (state) => state.app.channelName;


export default appSlice.reducer;
