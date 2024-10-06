import React, { useState } from "react";
import { auth, provider } from "../config/Firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
function Login() {
  const nav = useNavigate();
  const SignInFun = async () => {
    const res = await signInWithPopup(auth, provider);
    nav("/");

    console.log(auth.currentUser?.displayName);
    console.log(auth.currentUser?.photoURL);
  };
  return (
    <div>
      <p> please Sign in with google to continue .... </p>
      <button
        onClick={SignInFun}
        className="text-white bg-slate-500 p-2 m-3 hover:bg-slate-400 rounded-lg cursor-pointer"
      >
        Sign In with GooGle{" "}
      </button>
    </div>
  );
}

export default Login;
