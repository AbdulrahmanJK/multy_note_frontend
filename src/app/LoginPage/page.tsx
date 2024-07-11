"use client";

import { useStoreAuth } from "@/store/Auth";
import { useForm } from "react-hook-form";

interface Data {
  email: string;
  password: string;
}
export default function LoginPage() {
  const login = useStoreAuth((state) => state.login);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Data>();
  const onSubmit = (data: Data) => {
    console.log(data);

    const { email, password } = data;
    login(password, email);
  };

  return (
    <form onSubmit={handleSubmit((data) => onSubmit(data))}>
      <input
        className={"text-[black]"}
        type="text"
        placeholder="Email"
        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
      />
      <input
        className={"text-[black]"}
        type="tel"
        placeholder="Password"
        {...register("password", { required: true, maxLength: 12 })}
      />

      <input type="submit" />
    </form>
  );
}
