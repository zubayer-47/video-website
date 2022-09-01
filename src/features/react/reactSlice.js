import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { updateLikes, updateUnLikes } from "./reactAPI";

const initialState = {
  likes: 0,
  unlikes: 0,
};

export const updateLikeThunk = createAsyncThunk("react/updateLikeThunk",async ({videoId, likes}) => {
  const data = await updateLikes(videoId, likes);

  return data;
});

export const updateUnLikeThunk = createAsyncThunk("react/updateUnLikeThunk",async ({videoId, unLikes}) => {
  const data = await updateUnLikes(videoId, unLikes);

  return data;
});

const reactSlice = createSlice({
  name: "react",
  initialState,
  reducers: {
    addReact: (state, action) => {
      state.likes = action.payload.likes
      state.unlikes = action.payload.unLikes
    }
  },

  extraReducers: builder => {
    builder.addCase(updateLikeThunk.fulfilled, (state, action) => {
      state.likes = action.payload?.likes;
    })
    .addCase(updateUnLikeThunk.fulfilled, (state, action) => {
      state.unlikes = action.payload?.unlikes
    })
  }
});

export default reactSlice.reducer;
export const { addReact, likeReact,unlikeReact } = reactSlice.actions;
