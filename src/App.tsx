import './App.css';
import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
import Modal from './components/Modal';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { calculateTotals } from './features/cart/cartSlice';
import { AppDispatch, RootState } from './store'; // 自分のプロジェクトのパスに置き換えてください
import AddModal from './components/AddModal';
// import CartModal from './components/CartModal';

const App: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { cartItems } = useSelector((state: RootState) => state.cart);
  const { isOpen, isAddOpen } = useSelector((state: RootState) => state.modal);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems, dispatch]);

  return (
    <main>
      {isOpen && <Modal />}
      { isAddOpen && <AddModal />}
      <Navbar />
      {/* {isOpen && <CartModal />} */}
      <CartContainer />
    </main>
  );
};

export default App;
