import {
  addDoc,
  deleteDoc,
  collection,
  query,
  where,
  getDocs,
  doc,
} from "firebase/firestore";
import { auth, db } from "../config/Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from "react";

function PostShow({ post }) {
  const [user] = useAuthState(auth);
  const likesRef = collection(db, "likes");
  const [likesarray, setlikeArray] = useState([]);

  const addLike = async (data) => {
    const newDoc = await addDoc(likesRef, {
      id: user?.uid,
      postId: post.id,
    });

    setlikeArray((prev) => [...prev, { id: user.uid, likeId: newDoc.id }]);
  };

  const likesDoc = query(likesRef, where("postId", "==", post.id));

  const hasUserLiked = likesarray?.find((like) => like.id === user?.uid);

  const getlikes = async () => {
    try {
      const data = await getDocs(likesDoc);
      setlikeArray(
        data.docs.map((doc) => ({ id: doc.data().id, likeId: doc.id }))
      );
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getlikes();
  }, []);

  const removeLike = async (data) => {
    const likeToDeleteQuery = query(
      likesRef,
      where("postId", "==", post.id),
      where("id", "==", user?.uid)
    );

    const likeToDeleteData = await getDocs(likeToDeleteQuery);
    const likeId = likeToDeleteData.docs[0].id;
    const likeToDelete = doc(db, "likes", likeId);
    await deleteDoc(likeToDelete);

    setlikeArray(
      (prev) => prev && prev.filter((like) => likeId !== like.likeId)
    );
  };
  return (
    <div className="shadow-lg bg-slate-600 p-3  flex-col flex gap-8 text-white rounded-lg">
      <h1>{post.title}</h1>
      <p>{post.description}</p>
      <button
        onClick={hasUserLiked ? removeLike : addLike}
        className="text-xl w-fit self-start"
      >
        <p title={hasUserLiked ? "DisLike" : "Like"}>
          {" "}
          {hasUserLiked ? "👎🏻" : "👍🏻"}
        </p>
        {likesarray.length && <p>Likes:{likesarray.length}</p>}
      </button>
      <p className="text-sm self-end">@{post.userName}</p>
    </div>
  );
}

export default PostShow;
