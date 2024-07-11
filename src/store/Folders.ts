import { create } from "zustand";
import {
  FoldersGetById as GetByID,
  FoldersGet as GetAll,
  FoldersCreate as Make,
  FoldersDeleteById as DeleteById,
  FoldersPatchById as PatchById,
} from "@/app/api/FoldersApi";

interface Data {}
export const useStoreFolder = create<Data>((set) => ({
  FoldersCreate: async (name: string) => {
    try {
      await Make(name);
    } catch (e) {
      console.error((e as Error).message);
    }
  },

  FoldersGet: async () => {
    try {
      await GetAll();
    } catch (e) {
      console.error((e as Error).message);
    }
  },

  FoldersGetById: async (id: string) => {
    try {
      await GetByID(id);
    } catch (e) {
      console.error((e as Error).message);
    }
  },

  FoldersDeleteById: async (id: string) => {
    try {
      await DeleteById(id);
    } catch (e) {
      console.error((e as Error).message);
    }
  },

  FoldersPatchById: async (name:string, id:string) => {
    try {
      await PatchById(name, id)
    } catch (e) {
      console.error((e as Error).message)
    }
  },
}));
