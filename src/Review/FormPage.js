import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
function FormPage() {
  const [data, setdata] = useState({});

  const schema = yup.object().shape({
    name: yup.string().required("Name Is Required"),
    email: yup.string().required("Email is required").email(),
    password: yup
      .string()
      .required()
      .min(4, "Password must be at least 4 characters")
      .max(10, "Password cannot exceed 10 characters"),
    confpass: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords Don't match"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const Onsub = (data) => {
    setdata(data);
    console.log(data);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(Onsub)}
        className="flex flex-col justify-start items-start border-2 w-1/2 p-4 gap-3"
      >
        <input
          type="text"
          placeholder="name.."
          className="w-full"
          {...register("name")}
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}

        <input
          type="email"
          placeholder="email.."
          className="w-full"
          {...register("email")}
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

        <input
          type="password"
          placeholder="pass.."
          className="w-full"
          {...register("password")}
        />
        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}

        <input
          type="password"
          placeholder="Confirm Pass.."
          className="w-full"
          {...register("confpass")}
        />
        {errors.confpass && (
          <p className="text-red-500">{errors.confpass.message}</p>
        )}

        <button type="submit" className="self-center">
          Submit
        </button>
      </form>
      <div>
        {" "}
        Submited Data:
        <p>Name: {data.name}</p>
        <p>Email: {data.email}</p>
      </div>
    </div>
  );
}

export default FormPage;
