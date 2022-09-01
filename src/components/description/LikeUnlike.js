import { useState } from "react";
import { useDispatch } from "react-redux";
import likeImage from "../../assets/like.svg";
import unlikeImage from "../../assets/unlike.svg";
import { updateLikeThunk, updateUnLikeThunk } from "../../features/react/reactSlice";

export default function LikeUnlike({ videoId, videoLikes, videoUnlikes }) {
    const [likes, setLikes] = useState(videoLikes)
    const [unLikes, setUnLikes] = useState(videoUnlikes)
    const dispatch = useDispatch();

  return (
    <div className="flex gap-10 w-48">
      <div className="flex gap-1" onClick={() => {
        setLikes(prev => prev + 1)
        dispatch(updateLikeThunk({videoId, likes: likes + 1}))
      }}>
        <div className="shrink-0">
          <img className="w-5 block" src={likeImage} alt="Like" />
        </div>
        <div
          className="text-sm leading-[1.7142857] text-slate-600"
        >
          {likes}
        </div>
      </div>
      <div className="flex gap-1" onClick={() => {
        setUnLikes(prev => prev + 1)
        dispatch(updateUnLikeThunk({videoId, unLikes: unLikes + 1}))
      }}>
        <div className="shrink-0">
          <img className="w-5 block" src={unlikeImage} alt="Unlike" />
        </div>
        <div
          className="text-sm leading-[1.7142857] text-slate-600"
        >
            {unLikes}
        </div>
      </div>
    </div>
  );
}
