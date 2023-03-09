import { create } from 'zustand';
import { Product } from '../types/product';
import { persist } from 'zustand/middleware';

export interface ProductState {
  product: Product;
  createProduct: (product: Product) => void;
  updateProduct: (product: Partial<Product>) => void;
  resetProduct: () => void;
}

export const emptyProductState: Product = {
  id: 0,
  name: '',
  description: '',
  price: 0,
  image: '',
  color: [],
  inventory: 0,
  averageRating: 0,
  featured: false,
  inStock: false,
  brandId: '',
  categoryId: '',
  createdAt: '',
  updatedAt: '',
};

export const clearLocalStorage = () => {
  localStorage.removeItem('product');
};

export const useProductStore = create(
  persist<ProductState>(
    (set) => ({
      // Initial state
      product: emptyProductState,
      // Actions
      createProduct: (product) => set(() => ({ product })),
      updateProduct: (product) => set((state) => ({ product: { ...state.product, ...product } })),
      resetProduct: () => {
        clearLocalStorage();
        return emptyProductState;
      },
    }),
    {
      name: 'product',
    }
  )
);

// import { create } from 'zustand';
// import { userInfo } from '../types';

// export interface userState {
//   user: userInfo;
//   createUser: (user: userInfo) => void;
//   updateUser: (user: Partial<userInfo>) => void;
//   resetUser: () => void;
// }

// export const emptyUserState: userInfo = {
//   id: 0,
//   name: '',
//   email: '',
// };

// export const useUserStore = create<userState>((set) => ({
//   // Initial state
//   user: emptyUserState,
//   // Actions
//   createUser: (user) => set(() => ({ user })),
//   updateUser: (user) => set((state) => ({ user: { ...state.user, ...user } })),
//   resetUser: () => set(() => ({ user: emptyUserState })),
// }));
