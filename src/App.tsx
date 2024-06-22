import './App.css';
import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
import Modal from './components/Modal';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { calculateTotals } from './features/cart/cartSlice';
import { AppDispatch, RootState } from './store'; // 自分のプロジェクトのパスに置き換えてください
import AddModal from './components/AddModal';

const App: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { cartItems } = useSelector((state: RootState) => state.cart);
  const { isOpen, isAddOpen } = useSelector((state: RootState) => state.modal);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems, dispatch]);

  return (
    <main>
      {/* <Modal /> */}
      {isOpen && <Modal />}
      { isAddOpen && <AddModal />}
      <Navbar />
      <CartContainer />
    </main>
  );
};

export default App;
