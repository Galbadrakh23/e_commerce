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
  // count: number;
  // setCount: (count: number) => void;
  // minus: () => void;
  // add: () => void;
}

export interface ProfileContextType {
  isLoading: boolean;
  enterEmail: string;
  step: number;
  countDown: number;
  otpValue: string;
  setIsLoading: (isLoading: boolean) => void;
  setEnterEmail: (enterEmail: string) => void;
  setStep: (step: number) => void;
  setCountDown: (countDown: number) => void;
  setOtpValue: (otpValue: string) => void;
  handleEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSend: () => Promise<void>;
  handleConfirmOtp: (otpValue: string) => Promise<void>;
  handleResendOtp: () => void;
}

export interface IProduct {
  _id: string;
  name: string;
  description: string;
  price: number;
  size: string;
  images: [string];
  isNewProduct: boolean;
  quantity: number;
  discount: number;
  category: string;
  comment?: [
    {
      name: string;
      rating: number;
      comment: string;
    }
  ];
}

export interface ProductContextType {
  product: IProduct[];
  fetchAllProducts: () => void;
}

export interface ICategory {
  name: string;
  description: string;
}

export interface CategoryContextType {
  category: ICategory[];
  fetchCategoryData: () => void;
}

export type CardProps = {
  name: string;
  price: number;
  _id: string;
  discount: number;
};

export interface ICart {
  products: [
    {
      product: {
        name: string;
        category: string;
        comment: [];
        description: string;
        discount: 0;
        images: [];
        isNewProduct: true;
        price: 0;
        quantity: 0;
        size: string;
        _id: string;
      };
      quantity: number;
      totalAmount: number;
    }
  ];

  totalAmount: number;
  productId: string | string[];
}

export interface IInsertData {
  productId: string | string[];
  quantity: number;
  totalAmount: number | number[];
}

export interface CartContextType {
  cartData: ICart;
  setCartData: (cartData: ICart) => void;
  postCartData: () => void;
  count: number;
  setCount: (count: number) => void;
  minus: () => void;
  add: () => void;
  cardData: () => void;
  // insertCartData: IInsertData;
}
