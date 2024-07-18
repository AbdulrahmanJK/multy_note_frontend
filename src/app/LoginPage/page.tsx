"use client";

import { useStoreAuth } from "@/store/Auth";
import Link from "next/link";
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
    login(email, password);
  };

  return (
    <div className=" flex items-center justify-center h-svh w-[100%]">
      <div className="flex flex-col items-center  max-w-[500px]">
        <div className="">
          <h1 className="text-[36px]">SignIn</h1>
        </div>
        <form onSubmit={handleSubmit((data) => onSubmit(data))}>
          <input
            className={
              " h-[40px] w-full p-2 border border-[#363738] rounded bg-[#232324] text-white mb-[8px]"
            }
            type="text"
            placeholder="Email"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />

          <input
            className={
              " h-[40px] w-full p-2 border border-[#363738] rounded bg-[#232324] text-white mb-[8px]"
            }
            type="tel"
            placeholder="Password"
            {...register("password", { required: true, minLength: 1 })}
          />
          <ul>
            {errors.password && errors.password.type === "minLength" && (
              <li className="text-[red] mb-[8px]">
                password length must be {">"} 8
              </li>
            )}
            {errors.email && errors.email.type === "pattern" && (
              <li className="text-[red] mb-[8px]">plis use correct mail</li>
            )}
          </ul>

          <input
            className="mb-[8px] flex w-[100%] justify-center bg-blue-700 p-2 rounded-sm cursor-pointer hover:bg-blue-600"
            type="submit"
          />
        </form>
        <Link href={"/RegisterPage"}>
          <p className="text-blue-500 text-[18px]">Don't you have an account?</p>{" "}
        </Link>
      </div>
    </div>
  );
}
