import { clearCart } from '../features/cart/cartSlice'
import { closeModal } from '../features/modal/modalSlice'
import { useDispatch } from 'react-redux'

const Modal = () => {
  const dispatch = useDispatch()
  return (
    <aside className="modal-container">
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
    </aside>
  )
}

export default Modal
