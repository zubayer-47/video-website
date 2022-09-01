import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "../features/filter/filterSlice";
import filterByAuthorReducer from "../features/filterByAuthor/filterByAuthorSlice";
import reactReducer from "../features/react/reactSlice";
import relatedVideosReducer from "../features/relatedVideos/relatedVideosSlice";
import tagsReducer from "../features/tags/tagsSlice";
import videoReducer from "../features/video/videoSlice";
import videosReducer from "../features/videos/videosSlice";

export const store = configureStore({
    reducer: {
        videos: videosReducer,
        tags: tagsReducer,
        video: videoReducer,
        relatedVideos: relatedVideosReducer,
        filter: filterReducer,
        react: reactReducer,
        filterByAuthor: filterByAuthorReducer,
    },
});
