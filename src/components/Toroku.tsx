import { FC,useEffect,useRef,useState } from 'react';
import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';


const Toroku: FC = () => {
 
  const [data, setData] = useState({ email: "", password: "" });

const Hundlesubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
    const users = [data]; // 単一のユーザーオブジェクトを配列に変換
    console.log("Sending data:", users); // デバッグのためにコンソールに出力
    const url = "http://localhost:8080/api/v1/new";
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(users, null, '\t')
    }; 
      await fetch(url, options);
   
  };


    return (
        <div className="wrapper">
          <h1>新規会員登録</h1>
          <section className="section">
            <form onSubmit={Hundlesubmit}>
              <div className="form-item">
                <label>
                  <span className="label required">必須</span>
                  <span>Email</span>
                  <input 
                    type="text"
                    onChange={(e) => {
                      // オブジェクトを分解して、nameの部分だけ新しい値をセットする
                      setData({ ...data, email: e.target.value });
                    }} 
                  />
                </label>
                {/* {errors.email?.message && (
                  <p className="error-message">{errors.email?.message}</p>
                )} */}
              </div>
              <div className="form-item">
                <label>
                  <span className="label required">必須</span>
                  <span>PASSWORD</span>
                  <input 
                    type="text" 
                    onChange={(e) => {
                      // オブジェクトを分解して、nameの部分だけ新しい値をセットする
                      setData({ ...data, password: e.target.value });
                    }} 
                  />
                </label>
                {/* {errors.password?.message && (
                  <p className="error-message">{errors.password?.message}</p>
                )} */}
              </div>
              <div className="submit-button">
                <Button type="submit">登録する</Button>
              </div>
            </form>
          </section>
        </div>
      );
    };
    
    
    export default Toroku;