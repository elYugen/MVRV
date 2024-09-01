import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import AdminStreamers from "./admin/AdminStreamer.jsx"

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="admin/home" element={<AdminHome />} />
        <Route path="admin/news" element={<AdminNews />} />
        <Route path="admin/hero" element={<AdminHeros />} />
        <Route path="admin/streamer" element={<AdminStreamers />} />
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
    </>
  )
}

export default App