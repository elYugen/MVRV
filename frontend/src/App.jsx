import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from './contexts/AuthContext.jsx';
import Home from "./pages/Home";
import NoPage from "./pages/NoPage"
import Tierlist from "./pages/Tierlist"
import Perso from "./pages/HerosList.jsx"
import Stream from "./pages/Stream";
import Login from "./pages/Login"
import Register from "./pages/Register"
import ReadNews from "./pages/ReadNews"
import HerosRead from "./pages/HerosRead"
import AdminHome from "./admin/AdminHome.jsx"
import AdminNews from "./admin/AdminNews.jsx"
import AdminHeros from "./admin/AdminHero.jsx"

function App() {
  return (
    <>
    <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="admin/home" element={<AdminHome />} />
        <Route path="admin/news" element={<AdminNews />} />
        <Route path="admin/hero" element={<AdminHeros />} />
        <Route path="*" element={<NoPage />} />
        <Route path="tierlist" element={<Tierlist />} />
        <Route path="heros" element={<Perso />} />
        <Route path="heros/read/:id" element={<HerosRead />} />
        <Route path="stream" element={<Stream />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/news/read/:id" element={<ReadNews />} />
      </Routes>
    </BrowserRouter>
    </AuthProvider>
    </>
  )
}

export default App