import axios from "../../utils/axios";

export const getVideos = async (tags, search, _page = 1, _limit = 5) => {
  let queryString = "";

  if (tags?.length > 0) {
    queryString += tags.map((tag) => `tags_like=${tag}`).join("&");
  }

  if (search !== "") {
    queryString += `&q=${search}`;
  }
	let paginate = null;
	if (!queryString.length) {
		paginate = `&_limit=${_limit}&_page=${_page}`;
	} else {
		paginate = '';
	}

  // queryString += `&_limit=${_limit}&_page=${_page}`;
  
  const response = await axios.get(`/videos/?${queryString}${paginate}`);

  return response.data;
};

export const getAllVideo = async () => {
  const response = await axios.get(`/videos`);

  return response.data;
};
