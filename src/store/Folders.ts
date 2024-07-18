import { create } from 'zustand';
import {
  getByIdFolders as GetByID,
  getFolders as GetAll,
  createFolders as Make,
  deleteByIdFolders as DeleteById,
  patchByIdFolders as PatchById,
} from '@/app/api/FoldersApi';
import { FoldersStore } from '@/types';

export const useStoreFolder = create<FoldersStore>((set) => ({
  createFolders: async (name: string) => {
    return await Make(name);
  },

  getFolders: async () => {
    return await GetAll();
  },

  getByIdFolders: async (id: string) => {
    return await GetByID(id);
  },

  deleteByIdFolders: async (id: string) => {
    return await DeleteById(id);
  },

  patchByIdFolders: async (name: string, id: string) => {
    return await PatchById(name, id);
  },
}));
