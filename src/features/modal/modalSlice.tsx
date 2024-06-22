import { createSlice, PayloadAction } from '@reduxjs/toolkit'


interface ModalState {
  isOpen: boolean;
  isAddOpen: boolean;
}

const initialState: ModalState = {
  isOpen: false,
  isAddOpen: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal(state) {
      state.isOpen = true;
    },
    addOpenModal(state) {
      state.isAddOpen = true;
    },
    closeModal(state) {
      state.isOpen = false;
      state.isAddOpen = false;
    },
  },
});

export const { openModal, addOpenModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
