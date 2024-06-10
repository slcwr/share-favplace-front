import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store'; // 自分のプロジェクトのパスに置き換えてください
import { CartIcon } from '../HeroIcon';

const NavBar: React.FC = () => {
  const amount = useSelector((state: RootState) => state.cart.amount);

  return (
    <nav>
      <div className="nav-center">
        <h3>PonPonShopping</h3>
        <div className="nav-container">
          <CartIcon />
          <div className="amount-container">
            <div className="total-amount">{amount}</div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
