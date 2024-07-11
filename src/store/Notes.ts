import {
  NoteCreate as Create,
  NoteDelete as Delete,
  NotePatch as Patch,
} from "@/app/api/NotesApi";
import { create } from "zustand";

interface Data {}
export const useStoreNote = create<Data>((set) => ({
  NoteCreate: async (
    id: string,
    account: string,
    title?: string,
    name?: string,
    image?: string
  ) => {
    try {
      await Create(id, account, title, name, image);
    } catch (e) {
      console.error((e as Error).message);
    }
  },
  NotePatch: async (
    FolderId: string,
    NoteId: string,
    account: string,
    title?: string,
    name?: string,
    image?: string
  ) => {
    try {
      Patch(NoteId, FolderId, account, title, name, image);
    } catch (e) {
      console.error((e as Error).message);
    }
  },
  NoteDelete: async (FolderId: string, NoteId: string) => {
    try {
      Delete(FolderId, NoteId);
    } catch (e) {
      console.error((e as Error).message);
    }
  },
}));
