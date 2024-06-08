// src/Home.tsx
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate()
    const handleLogin = () => {
        navigate('/Login')
    }
    const handleToroku = () => {
        navigate('/Toroku')
    }
    const handleMypage = () => {
        navigate('/Mypage')
    }

    return (
        <>
            <button onClick={handleLogin}>ログイン画面</button>
            <br />
            <button onClick={handleToroku}>新規登録</button>
            <br />
            <button onClick={handleMypage}>マイページ</button>
        </>
    )
}
export default Home;