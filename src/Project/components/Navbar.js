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
    <div className="flex justify-between gap-3 items-center mb-2 bg-cyan-500 p-4">
      {!user ? (
        <Link
          className="text-white p-3 border-b-2 text-center border-collapse  w-1/3 rounded-md cursor-pointer hover:bg-gray-400 shadow-lg"
          to={"/login"}
        >
          Go to Login Page
        </Link>
      ) : (
        <Link
          className="text-white p-3 border-b-2 text-center  w-1/3 rounded-md cursor-pointer hover:bg-gray-400 shadow-lg"
          to={"/createpost"}
        >
          Create A post{" "}
        </Link>
      )}
      <Link
        className="text-white p-3 border-b-2 text-center  w-1/3 rounded-md cursor-pointer hover:bg-gray-400 shadow-lg"
        to={"/"}
      >
        Go to Home Page
      </Link>
      {user && (
        <div className=" gap-2 flex items-center justify-between text-white ">
          <p className="">
            <img
              src={user.photoURL}
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
          </p>
          <p>{user?.displayName} </p>
        </div>
      )}
      <div>
        {user && (
          <button
            onClick={Signoutfun}
            className=" text-white rounded-md p-3 hover:bg-gray-400 border-b-2 shadow-lg "
          >
            Log Out
          </button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
