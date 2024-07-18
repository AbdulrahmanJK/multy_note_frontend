import { create } from "zustand";
import { register as authReg } from "@/app/api/AuthApi";
import { login as authLog } from "@/app/api/AuthApi";
import { getMe as myProfile } from "@/app/api/AuthApi";
import { AxiosError } from "axios";
import { persist } from "zustand/middleware";

interface Data {
  token: string | null;
  login: (password: string, email: string) => Promise<void>;
  register: (
    password: string,
    email: string,
    username: string
  ) => Promise<string>;
  getMe: () => Promise<void>;
}
export const useStoreAuth = create<Data>()(
  persist(
    (set) => ({
      token: null,
      
      login: async (email, password) => {
        try {
          const token = await authLog(email, password);
          set({ token });
          console.log(token);
        } catch (e) {
          if (e instanceof AxiosError) {
            console.error(e.message, +"authLog");
          }
        }
      },
      register: async (email, password, username) => {
          const res = await authReg(email, password, username);
          return res
      },
      getMe: async () => {
        try {
          await myProfile();
        } catch (e) {
          console.error((e as Error).message);
        }
      },
    }),

    {
      name: "token-storage",
    }
  )
);

