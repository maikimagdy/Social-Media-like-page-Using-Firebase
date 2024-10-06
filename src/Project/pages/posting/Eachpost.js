import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../../config/Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

function Eachpost() {
  const nav = useNavigate();
  const [user] = useAuthState(auth);
  const schema = Yup.object().shape({
    title: Yup.string().required("U must insert a Title"),
    description: Yup.string().required("U must insert a Description"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const postsRef = collection(db, "posts");

  const SubmitFun = async (data) => {
    await addDoc(postsRef, {
      ...data,
      userName: user?.displayName,
      id: user?.uid,
    });
    nav("/");
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(SubmitFun)}
        className="flex flex-col gap-2 m-2"
      >
        <input
          placeholder="Title...."
          className=" shadow-lg px-2"
          {...register("title")}
        />
        <p className="text-red-600 text-sm">{errors.title?.message}</p>
        <input
          placeholder="Description...."
          className="py-10 px-2 shadow-lg"
          {...register("description")}
        />
        <p className="text-red-600 text-sm">{errors.description?.message}</p>

        <input
          type="submit"
          className="self-start bg-slate-500 p-3 rounded-md text-white cursor-pointer hover:bg-slate-400"
        />
      </form>
    </div>
  );
}

export default Eachpost;
