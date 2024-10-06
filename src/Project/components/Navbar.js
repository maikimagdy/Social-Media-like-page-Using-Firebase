import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../config/Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

function Navbar() {
  const [user] = useAuthState(auth);

  const Signoutfun = async () => {
    await signOut(auth);
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-2 bg-cyan-500 p-4 rounded-md shadow-lg">
      {!user ? (
        <Link
          className="text-white w-full shadow-lg p-4 text-center rounded-md cursor-pointer hover:bg-gray-400 transition duration-200 ease-in-out"
          to={"/login"}
        >
          Go to Login Page
        </Link>
      ) : (
        <Link
          className="text-white w-full shadow-lg p-4 text-center rounded-md cursor-pointer hover:bg-gray-400 transition duration-200 ease-in-out"
          to={"/createpost"}
        >
          Create A Post
        </Link>
      )}
      <Link
        className="text-white w-full p-4 text-center rounded-md cursor-pointer shadow-lg hover:bg-gray-400 transition duration-200 ease-in-out"
        to={"/"}
      >
        Go to Home Page
      </Link>
      {user && (
        <div className="flex flex-col items-center text-white w-full">
          <div className="flex items-center gap-2 mb-2">
            <img
              src={user.photoURL}
              alt="Profile"
              className="w-12 h-12 rounded-full border-2 border-white"
            />
            <p className="text-lg">{user?.displayName}</p>
          </div>
          <button
            onClick={Signoutfun}
            className="text-white w-full p-4 rounded-md hover:bg-gray-400 transition duration-200 ease-in-out shadow-lg"
          >
            Log Out
          </button>
        </div>
      )}
    </div>
  );
}

export default Navbar;
