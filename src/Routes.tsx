// src/Routes.tsx
import { Routes, Route } from "react-router-dom";
import Home from "./Home"
import Login from "./components/Login"
import Mypage from "./components/Mypage"
import Toroku from "./components/Toroku"

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/toroku" element={<Toroku />} />
            <Route path="/mypage" element={<Mypage />} />
        </Routes>
    )
}