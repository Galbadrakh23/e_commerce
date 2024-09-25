export interface IUser {
  id?: string;
  firstname: string;
  lastname: string;
  email: string;
}

export interface UserContextType {
  user: IUser;
  token: string;
  setToken: (token: string) => void;
  setUser?: (user: IUser) => void;
  fetchUserData?: () => void;
}
