import {
  NoteCreate as Create,
  NoteDelete as Delete,
  NotePatch as Patch,
} from "@/app/api/NotesApi";
import { create } from "zustand";
import { NoteStore } from "@/types";
export const useStoreNote = create<NoteStore>((set) => ({
  NoteCreate: async (id, account, title?, name?, image?) => {
    const res = await Create(id, account, title, name, image);
    return res;
  },
  NotePatch: async (FolderId, NoteId, account, title, name, image) => {
    const res = Patch(NoteId, FolderId, account, title, name, image);
    return res;
  },
  NoteDelete: async (FolderId, NoteId) => {
    const res = Delete(FolderId, NoteId);
    return res;
  },
}));
