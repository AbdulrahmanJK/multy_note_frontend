import { create } from 'zustand';
import { register as authReg } from '@/app/api/AuthApi';
import { login as authLog } from '@/app/api/AuthApi';
import { getMe as myProfile } from '@/app/api/AuthApi';
import { AxiosError } from 'axios';
import { persist } from 'zustand/middleware';
import { AuthStore } from '@/types';

export const useStoreAuth = create<AuthStore>()(
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
        return await authReg(email, password, username);
      },
      getMe: async () => {
        return await myProfile();
      },
    }),

    {
      name: 'token-storage',
    }
  )
);
