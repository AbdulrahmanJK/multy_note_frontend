import { create } from 'zustand';
import { register as authReg } from '@/app/api/AuthApi';
import { login as authLog } from '@/app/api/AuthApi';
import { getMe as myProfile } from '@/app/api/AuthApi';
import { AxiosError } from 'axios';
import { persist } from 'zustand/middleware';
import { AuthTypes } from '@/types';

export const useStoreAuth = create<AuthTypes>()(
  persist(
    (set) => ({
      token: null,

      login: async (email, password) => {
        try {
          const token = await authLog(email, password);
          set({ token });
          console.log(token);
          return token;
        } catch (e) {
          if (e instanceof AxiosError) {
            console.error(e.message);
          }
        }
      },
      register: async (email, password, username) => {
        const res = await authReg(email, password, username);
        return res;
      },
      getMe: async () => {
        try {
          const res = await myProfile();
          return res;
        } catch (e) {
          console.error((e as Error).message);
        }
      },
    }),

    {
      name: 'token-storage',
    }
  )
);
