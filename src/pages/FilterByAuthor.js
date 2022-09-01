import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import VideoGridItem from "../components/grid/VideoGridItem";
import Tags from "../components/tags/Tags";
import Loading from "../components/ui/Loading";
import Pagination from "../components/ui/Pagination";
import { fetchByAuthor } from "../features/filterByAuthor/filterByAuthorSlice";

export default function FilterByAuthor(props) {
  const dispatch = useDispatch();
  const { videos, isLoading, isError, error } = useSelector(
    (state) => state.filterByAuthor
  );

  const params = useParams();

  console.log(videos.length);

  useEffect(() => {
    dispatch(fetchByAuthor({ author: params.authorName }));
  }, [dispatch, params]);

  // decide what to render
  let content;

  if (isLoading) content = <Loading />;
  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;

  if (!isError && !isLoading && videos?.length === 0) {
    content = <div className="col-span-12">No videos found!</div>;
  }

  if (!isError && !isLoading && videos?.length > 0) {
    content = videos.map((video) => (
      <VideoGridItem key={video.id} video={video} />
    ));
  }

  return (
    <>
      <Tags />
      <section className="pt-12">
        <section className="pt-12">
          <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
            {content}
          </div>
        </section>
      </section>
      <Pagination />
    </>
  );
}
