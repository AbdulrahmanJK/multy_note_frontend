export interface NoteStore {
  NoteCreate: (account: string, id: string, title?: string, name?: string, image?: string) => Promise<{} | string>;
  NoteDelete: (NoteId: string, FolderId: string) => Promise<{} | string>;
  NotePatch: (
    account: string,
    FolderId: string,
    NoteId: string,
    title?: string,
    name?: string,
    image?: string
  ) => Promise<{} | string>;
}
