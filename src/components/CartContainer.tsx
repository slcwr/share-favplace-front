import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from '../components/CartItem';
import { openModal, addOpenModal } from '../features/modal/modalSlice';
import { RootState } from '../store'; // 自分のプロジェクトのパスに置き換えてください
import { CartItemType } from './CartItem';

const CartContainer: React.FC = () => {
  const dispatch = useDispatch();
  const { cartItems, total } = useSelector((state: RootState) => state.cart);

  return (
    <section className='cart'>
      <header className='cart-header' >
        <h2>カート</h2>
        <button className='add-btn' onClick={() => dispatch(addOpenModal())}>追加</button>
      </header>
      <div>
      {cartItems.map((item) => {
          // idがundefinedの場合の対処
          if (item.id === undefined) {
            return null;
          }
          // idがある場合に限り、CartItemをレンダリング
          const cartItemProps: CartItemType = {
            id: item.id,
            img: item.img,
            title: item.title,
            price: item.price,
            amount: item.amount || 0, // amountがundefinedの場合に0を代入
          };
          return <CartItem key={item.id} {...cartItemProps} />;
        })}

      </div>
      <footer>
        <hr />
        <div className='cart-total'>
          <h4>合計<span>{total}円</span></h4>
        </div>
        <button className='btn clear-btn' onClick={() => dispatch(openModal())}>全削除</button>
      </footer>
    </section>
  );
};

export default CartContainer;
