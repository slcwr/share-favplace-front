import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import CartItems from '../../CartItem';

// CartItem 型の定義（仮の例）
interface CartItem {
  id?: number;
  title: string;
  price: number;
  img: string;
  amount?: number;
}

interface CartState {
  cartItems: CartItem[];
  total: number;
  amount: number;
}


const initialState: CartState = {
    cartItems: CartItems as CartItem[], // 型アサーションを追加
    total: 0,
    amount: 0,
  };
// const initialState: CartState = {
//   cartItems: CartItems,
//   total: 0,
//   amount: 0,
// };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = state.cartItems.map((item) => {
        item.amount = 0;
        return item;
      });
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.cartItems = state.cartItems.map((item) => {
        if (item.id === action.payload) item.amount = 0;
        return item;
      });
    },
    addItem: (state, action: PayloadAction<CartItem>) => {
      const newItem = { ...action.payload, id: state.cartItems.length + 1, amount: 0 };
      state.cartItems.push(newItem);
    },
    increase: (state, action: PayloadAction<number>) => {
      const cartItem = state.cartItems.find((item) => item.id === action.payload);
      if (cartItem) {
        cartItem.amount = (cartItem.amount || 0) + 1;
      }
    },
    decrease: (state, action: PayloadAction<number>) => {
      const cartItem = state.cartItems.find((item) => item.id === action.payload);
      if (cartItem) {
        cartItem.amount = (cartItem.amount || 0) - 1;
      }
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount || 0;
        total += (item.amount || 0) * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
});

export const { clearCart, removeItem, addItem, increase, decrease, calculateTotals } = cartSlice.actions;
export default cartSlice.reducer;
