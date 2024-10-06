import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup"; // Import yup as a default import

function ReactForm() {
  const Sub = (data) => {
    console.log(data);
  };

  const schema = yup.object().shape({
    fullname: yup.string().required("full Name is required"),
    email: yup.string().required().email(),
    pass: yup.string().min(4).max(10).required(),
    Confirmpass: yup
      .string()
      .oneOf([yup.ref("pass"), null], "Passwords don't match")
      .required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <div>
      <form
        onSubmit={handleSubmit(Sub)}
        className="flex flex-col w-1/2 gap-2 shadow-lg p-2 m-3"
      >
        <input placeholder="Name" type="text" {...register("fullname")} />
        <p className="text-red-400 text-sm">{errors.fullname?.message}</p>
        <input placeholder="Email" type="email" {...register("email")} />
        <p className="text-red-400 text-sm">{errors.email?.message}</p>
        <input placeholder="Password" type="password" {...register("pass")} />
        <p className="text-red-400 text-sm">{errors.pass?.message}</p>

        <input
          placeholder="Confirm Password"
          type="password"
          {...register("Confirmpass")}
        />
        <p className="text-red-400 text-sm">{errors.Confirmpass?.message}</p>

        <button
          className="cursor-pointer bg-green-800 px-4 py-2 rounded-md text-white hover:bg-green-400"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ReactForm;
