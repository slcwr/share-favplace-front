import { FC } from "react";
import { useForm, SubmitHandler} from "react-hook-form";
import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';


const Login: FC = () => {
 
  const navigation = useNavigate()

  const move = () => {
    navigation("/../App") // 画面遷移
  };

  return (
    <Button type="button" onClick={move}>
          ログイン
    </Button>
  );
};

export default Login;
