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
  folders:[],

  createFolders: async (name) => {
    return await Make(name);
  },

  getFolders: async () => {
    const newFolders = await GetAll();
    set(() => ({ folders:  newFolders }));
    return newFolders;
    
  },

  getByIdFolders: async (id) => {
    return await GetByID(id);
  },

  deleteByIdFolders: async (id) => {
    return await DeleteById(id);
  },

  patchByIdFolders: async (name, id) => {
    return await PatchById(name, id);
  },
}));
