// src/Home.tsx
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate()
    const handleForm = () => {
        navigate('/Login')
    }
    const handleView = () => {
        navigate('/Toroku')
    }
    return (
        <>
            <button onClick={handleForm}>ログイン画面</button>
            <br />
            <button onClick={handleView}>新規登録</button>
        </>
    )
}
export default Home;