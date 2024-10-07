import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMvies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMvies = action.payload;
    },
  },
});

export const { addNowPlayingMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
