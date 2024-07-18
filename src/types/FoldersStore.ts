export interface FoldersStore {
  createFolders: (name: string) => Promise<{} | string>;
  getFolders: () => Promise<[{}]>;
  getByIdFolders: (id: string) => Promise<{} | string>;
  deleteByIdFolders: (id: string) => Promise<{} | string>;
  patchByIdFolders: (name: string, id: string) => Promise<{} | string>;
}