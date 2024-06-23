import { clearCart } from '../features/cart/cartSlice'
import { closeModal } from '../features/modal/modalSlice'
import { useDispatch } from 'react-redux'

const CartModal = () => {
  const dispatch = useDispatch()
  return (
    
        <div className="modal add">
            <h4>買い物かごを全て空にしますか？</h4>
            <div className="btn-container">
                <button className="btn confirm-btn" onClick={() => {
                    dispatch(clearCart());
                    dispatch(closeModal())
                    }}>OK</button>
                <button className="btn clear-btn" onClick={() => dispatch(closeModal())}>やめとく</button>
            </div>
        </div>
   
  )
}

export default CartModal
