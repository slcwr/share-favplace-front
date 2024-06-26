import { clearCart } from '../features/cart/cartSlice'
import { closeModal } from '../features/modal/modalSlice'
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { calculateTotals } from '../features/cart/cartSlice';
import { AppDispatch, RootState } from '../store'; // 自分のプロジェクトのパスに置き換えてください
import AddModal from '../components/AddModal';
import Modal from '../components/Modal';
import CartContainer from './CartContainer';
import { CartItemType } from './CartItem';
import CartItem from '../components/CartItem';



const CartModal = () => {
  const dispatch = useDispatch()
  const { cartItems, total } = useSelector((state: RootState) => state.cart);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems, dispatch]);

  return (
    <aside className="modal-container">
        <div className="modal add">
            <h4>買い物かご</h4>
            <div>
      {cartItems.map((item) => {
          // idがundefinedの場合の対処
          if (item.id === undefined) {
            return null;
          }
          // idがある場合に限り、CartItemをレンダリング
          const cartItemProps: CartItemType = {
            id: item.id,
            // img: item.img,
            title: item.title,
            price: item.price,
            amount: item.amount || 0, // amountがundefinedの場合に0を代入
          };
          return <CartItem key={item.id} {...cartItemProps} />;
        })}

      </div>
            <div className="btn-container">
                <button className="btn clear-btn" onClick={() => dispatch(closeModal())}>戻る</button>
            </div>
        </div>
    </aside>
  )
}


export default CartModal

