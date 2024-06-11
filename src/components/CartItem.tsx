import React from 'react';
import { PlusIcon,MinusIcon} from '../HeroIcon'
import { useDispatch } from "react-redux"
import { removeItem,increase,decrease } from "../features/cart/cartSlice"

// CartItem の型定義
export interface CartItemType {
  id: number;
  img: string;
  title: string;
  price: number;
  amount: number;
}

const CartItem: React.FC<CartItemType>  = ({ id,img,title,price,amount }) => {
  const dispatch = useDispatch()
  return (
    <article className='cart-item'>
      <img src={img} alt="" />
      <div>
        <h4>{title}</h4>
        <h4 className='item-price'>¥{price}</h4>
        <button className='remove-btn' onClick={() => dispatch(removeItem(id))}>空にする</button>
      </div>
      <div>
        <button className='amount-btn' onClick={() => dispatch(increase(id))}>
          <PlusIcon />
        </button>
        <p className="amount">{amount}</p>
        {amount === 0 ? "" : <button className='amount-btn' onClick={() => {
          dispatch(decrease(id))
          }}>
        <MinusIcon />
        </button> }
      </div>
    </article>
  )
}

export default CartItem