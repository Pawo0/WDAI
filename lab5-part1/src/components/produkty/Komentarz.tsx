import { useState } from "react";

import { KomentarzProps } from "./interfaces.ts";
import clsx from "clsx";


export default function Komentarz(props: KomentarzProps) {
  const { id, body, postId, likes, user } = props;
  const [likesState, setLikesState] = useState(likes);
  const [isLiked, setIsLiked] = useState(false);
  const [isUnliked, setIsUnliked] = useState(false);

  const handleLike = () => {
    if (!isLiked) {
      setLikesState((prevState) => prevState + 1);
      setIsLiked(true);
      if (isUnliked) {
        setLikesState((prevState) => prevState + 1);
        setIsUnliked(false);
      }
    } else {
      setLikesState((prevState) => prevState - 1);
      setIsLiked(false);
    }
  };

  const handleUnlike = () => {
    if (!isUnliked) {
      setLikesState((prevState) => prevState - 1);
      setIsUnliked(true);
      if (isLiked) {
        setLikesState((prevState) => prevState - 1);
        setIsLiked(false);
      }
    } else {
      setLikesState((prevState) => prevState + 1);
      setIsUnliked(false);
    }
  };

  return (
    <div className={clsx("commentBlock")}>
      <div>
        <h2>Komentarz nr {id} dla postu {postId}</h2>
      </div>
      <div>{body}</div>
      <div>likes: {likesState}</div>
      <div>
        <button className={clsx(isLiked && "selected")} onClick={handleLike}>
          👍🏿
        </button>
        <button
          className={clsx(isUnliked && "selected")}
          onClick={handleUnlike}
        >
          👎🏿
        </button>
      </div>
      <div>User: {user.username}</div>
    </div>
  );
}
