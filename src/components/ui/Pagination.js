import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "../../features/videos/videosSlice";

export default function Pagination() {
  const { totalVideos } = useSelector((state) => state.videos);
  const { tags, search } = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const paginate = new Array(Math.ceil(totalVideos / 5)).fill("");

  const handlePaginate = (page) => {
    dispatch(fetchVideos({ search, tags, _page: page }));
  };

  return (
    <section className="pt-12">
      <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 justify-end">
        {paginate.map((i, index) => {
          return (
            <button
              key={index + 1}
              className="bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer"
              onClick={() => handlePaginate(index+1)}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
    </section>
  );
}
