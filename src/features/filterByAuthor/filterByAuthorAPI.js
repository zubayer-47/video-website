import axiosInstance from "../../utils/axios";

export const getVideosByAuthor = async (author) => {
    const response = await axiosInstance.get(`/videos/?author_like=${author}`);

    return response.data;
};
