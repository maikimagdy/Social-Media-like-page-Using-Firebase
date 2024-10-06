import React, { useEffect, useState } from "react";
import { auth, db } from "../config/Firebase";
import { collection, getDocs } from "firebase/firestore";
import PostShow from "../components/PostShow";
import { useAuthState } from "react-firebase-hooks/auth";
function Home() {
  const [user] = useAuthState(auth);

  const postsRef = collection(db, "posts");
  const [postsList, setPostsList] = useState([]);
  console.log(postsList.map((post) => post.userName));
  const getPosts = async () => {
    const data = await getDocs(postsRef);
    setPostsList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  useEffect(() => {
    getPosts();
  }, []);
  return (
    <div>
      <div className="m-2 text-center ">
        {!user && "Welcome Home Page Sign In To Show Posts...."}
      </div>
      {user && (
        <div className="flex gap-7 p-4 flex-col">
          {postsList?.map((post) => (
            <PostShow post={post} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
