import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';


type Inputs = {
  userId: string;
  password: string;
  //comment: string;
  submit: any;
};

const Toroku: FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  // watch
  //const lastName = watch("lastName");

  return (
    <div className="wrapper">
      <h1>新規会員登録</h1>
      <section className="section">
        {/* <h2>useState Form</h2> */}
        {/* <p>React Hook Formを使用してformを作成した例です。</p> */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-item">
            <label>
              <span className="label required">必須</span>
              <span>Email</span>
              <input
                type="text"
                {...register("userId", {
                  required: "メールアドレスを入力してください",
                })}
              />
            </label>
            {errors.userId?.message && (
              <p className="error-message">{errors.userId?.message}</p>
            )}
          </div>
          <div className="form-item">
            <label>
              <span className="label required">必須</span>
              <span>PASSWORD</span>
              <input
                type="text"
                {...register("password", {
                  required: "パスワードを入力してください",
                })}
              />
            </label>
            {errors.password?.message && (
              <p className="error-message">{errors.password?.message}</p>
            )}
          </div>
          {/* <div className="form-item">
            <label>
              <span className="label required">必須</span>
              <span>コメント</span>
              <textarea
                {...register("comment", {
                  required: true,
                  minLength: {
                    value: 10,
                    message: "10文字以上で入力してください",
                  },
                  maxLength: {
                    value: 20,
                    message: "20文字以下で入力してください",
                  },
                })}
              />
            </label>
            {errors.comment?.message && (
              <p className="error-message">{errors.comment.message}</p>
            )}
          </div> */}
          <div className="submit-button">
          <Button type="submit">登録する</Button>
          </div>
        </form>
      </section>
      {/* <p>姓: {lastName}</p> */}
    </div>
  );
};

export default Toroku;

