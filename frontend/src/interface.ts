export interface IUser {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  rePassword: string;
}

export interface UserContextType {
  user: IUser | null;
  token: string;
  setToken: (token: string) => void;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  fetchUserData?: () => void;
  refetch?: any;
  setRefetch?: any;
}
