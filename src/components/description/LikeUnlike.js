import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import likeImage from "../../assets/like.svg";
import unlikeImage from "../../assets/unlike.svg";
import {
  addReact,
  updateLikeThunk,
  updateUnLikeThunk
} from "../../features/react/reactSlice";

export default function LikeUnlike({ videoId, videoLikes, videoUnlikes }) {
  const { likes, unlikes } = useSelector((state) => state.react);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      addReact({
        likes: videoLikes,
        unLikes: videoUnlikes,
      })
    );
  }, [dispatch, videoLikes, videoUnlikes]);

  return (
    <div className="flex gap-10 w-48">
      <div
        className="flex gap-1"
        onClick={() => {
          dispatch(updateLikeThunk({ videoId, likes: likes + 1 }));
        }}
      >
        <div className="shrink-0">
          <img className="w-5 block" src={likeImage} alt="Like" />
        </div>
        <div className="text-sm leading-[1.7142857] text-slate-600">
          {likes}
        </div>
      </div>
      <div
        className="flex gap-1"
        onClick={() => {
          dispatch(updateUnLikeThunk({ videoId, unLikes: unlikes + 1 }));
        }}
      >
        <div className="shrink-0">
          <img className="w-5 block" src={unlikeImage} alt="Unlike" />
        </div>
        <div className="text-sm leading-[1.7142857] text-slate-600">
          {unlikes}
        </div>
      </div>
    </div>
  );
}
