import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getVideosByAuthor } from "./filterByAuthorAPI";

const initialState = {
    videos: [],
    isLoading: false,
    isError: false,
    error: "",
};

export const fetchByAuthor = createAsyncThunk(
    "videos/fetchByAuthor",
    async ({ author }) => {
        const videos = await getVideosByAuthor(author);
        return videos;
    }
);

const filterByAuthor = createSlice({
    name: "filterByAuthor",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchByAuthor.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(fetchByAuthor.fulfilled, (state, action) => {
                state.isLoading = false;
                state.videos = action.payload;
            })
            .addCase(fetchByAuthor.rejected, (state, action) => {
                state.isLoading = false;
                state.videos = [];
                state.isError = true;
                state.error = action.error?.message;
            })
    },
});

export default filterByAuthor.reducer;
