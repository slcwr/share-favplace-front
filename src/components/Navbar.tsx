import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { RootState } from '../store'; // 自分のプロジェクトのパスに置き換えてください
import { CartIcon } from '../HeroIcon';
import { clearCart } from '../features/cart/cartSlice'
import { addOpenModal,openCartModal } from '../features/modal/modalSlice'

const NavBar: React.FC = () => {
  const amount = useSelector((state: RootState) => state.cart.amount);
  const dispatch = useDispatch()
  return (
    <nav>
      <div className="nav-center">
        <h3>PonPonShopping</h3>
        <div className="nav-container">
        <button className="btn confirm-btn" onClick={() => dispatch(openCartModal())}>
        <CartIcon /> 
        </button>
          <div className="amount-container">
            <div className="total-amount">{amount}</div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
