import React from 'react';
import TextBox from './TextBox';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/cart/cartSlice';
import { closeModal } from '../features/modal/modalSlice';

// バリデーションスキーマの型を定義
interface FormData {
    id?: number;
    title: string;
    price: number;
    img: string;
    amount?: number;
}

const schema = yup.object({
   id: yup.number(),
  title: yup.string().required('必須です'),
  price: yup
    .number()
    .required('必須です'),
    // .matches(/[1-9]|[1-9][0-9]{1,4}/, '数字で入力してください'),
  img: yup
    .string()
    .required('必須です'),
    //.min(8, '8文字以上記入してください'),
    //.matches(/(https?:\/\/[\-_\.\!\~\*\'\(\)a-zA-Z0-9\;\/\?\:\@\&\=\+\$\,\%\#]+)/i, '正しい書式で記入してください'),
   amount: yup.number()
}).required();

const AddModal: React.FC = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    dispatch(addItem(data));
    dispatch(closeModal());
  };

  console.log("bbb")

  return (
    <aside className="modal-container">
      <form className="modal add" onSubmit={handleSubmit(onSubmit)}>
        <TextBox
          register={register}
          errors={errors}
          values={[
            { id: 1, english: 'title', japanese: 'タイトル' },
            { id: 2, english: 'price', japanese: '価格' },
            { id: 3, english: 'img', japanese: '画像パス' },
          ]}
        />
        <button className="add-btn">作成</button>
        <button className="cancel-btn" type="button" onClick={() => dispatch(closeModal())}>閉じる</button>
      </form>
    </aside>
  );
};

export default AddModal;

