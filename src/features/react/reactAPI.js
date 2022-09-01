import axios from "../../utils/axios";

export const updateLikes = async (videoId, likes) => {
  const response = await axios.patch(`/videos/${videoId}`, { likes });

  console.log(response);

  return response.data;
};

export const updateUnLikes = async (videoId, unLikes) => {
  const response = await axios.patch(`/videos/${videoId}`, { unlikes: unLikes });

  console.log(response);

  return response.data;
};
