export interface AuthStore {
  token: string | null;
  login: (password: string, email: string) => Promise<string | undefined>;
  register: (
    password: string,
    email: string,
    username: string
  ) => Promise<{}>;
  getMe: () => Promise<{}>;
}