// TextBox.tsx

import React from 'react';

interface TextBoxProps {
  register: any; // react-hook-form の register メソッドの型
  errors: any; // react-hook-form の errors オブジェクトの型
  values: { id: number; english: string; japanese: string }[]; // 入力フィールドの情報の配列
}

const TextBox: React.FC<TextBoxProps> = ({ register, errors, values }) => {
  return (
    <div className="textbox-container">
      {values.map((field) => (
        <div key={field.id} className="textbox-field">
          <label>{field.japanese}</label>
          <input type="text" {...register(field.english)} />
          {errors[field.english] && <p className="error-message">{errors[field.english].message}</p>}
        </div>
      ))}
    </div>
  );
};

export default TextBox;

