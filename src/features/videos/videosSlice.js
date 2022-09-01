import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllVideo, getVideos } from "./videosAPI";

const initialState = {
    videos: [],
    isLoading: false,
    isError: false,
    error: "",
    totalVideos: 0
};

// async thunk
export const fetchVideos = createAsyncThunk(
    "videos/fetchVideos",
    async ({ tags, search, _page, _limit, }) => {
        const videos = await getVideos(tags, search, _page, _limit);
        // console.log({videos});
        return videos;
    }
);

export const fetchAllVideos = createAsyncThunk(
    "videos/fetchAllVideos",
    async () => {
        const videos = await getAllVideo();
        // console.log({videos});
        return videos;
    }
);

const videoSlice = createSlice({
    name: "videos",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchVideos.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(fetchVideos.fulfilled, (state, action) => {
                state.isLoading = false;
                state.videos = action.payload;
            })
            .addCase(fetchVideos.rejected, (state, action) => {
                state.isLoading = false;
                state.videos = [];
                state.isError = true;
                state.error = action.error?.message;
            })
            .addCase(fetchAllVideos.fulfilled, (state, action) => {
                state.totalVideos = action.payload?.length;
            })
    },
});

export default videoSlice.reducer;
