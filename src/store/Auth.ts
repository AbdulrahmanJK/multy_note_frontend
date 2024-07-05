import { create } from "zustand";
import axios, { AxiosResponse } from "axios";

interface Data {
  token: string | null;
  login: (password: string, email: string) => Promise<void>;
  register: (password: string, email: string, username:string) => Promise<void>;
}

export const useStoreAuth = create<Data>((set) => ({
  token: null,
  login: async (email, password) => {
    const url = "http://localhost:4000/login";
    try {
      const response: AxiosResponse = await axios.post(url, {
        email: email,
        password: password,
      });

      if (response.status !== 200) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json =await response.data;
      set(()=>({token:json}))

      console.log(json);
      return json
    } catch (e) {
      console.error((e as Error).message);
    }
  },
  register: async (email, password, username) => {
    const url = "http://localhost:4000/auth";
    try {
      const response: AxiosResponse = await axios.post(url, {
        username:username,
        email: email,
        password: password,
      });

      if (response.status !== 200) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json =await response.data;
      set(()=>({token:json}))

      console.log(json);
      return json
    } catch (e) {
      console.error((e as Error).message);
    }
  },
  
}));
