import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NoPage from "./pages/404"
import Tierlist from "./pages/Tierlist"
import Perso from "./pages/Perso"
import Stream from "./pages/Stream";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NoPage />} />
          <Route path="tierlist" element={<Tierlist />} />
          <Route path="perso" element={<Perso />} />
          <Route path="stream" element={<Stream />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
