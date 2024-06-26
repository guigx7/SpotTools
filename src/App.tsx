//src/App.tsx

import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { PlaylistSorter } from "./pages/PlaylistSorter/PlaylistSorter";
import './styles/Global.css'


export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/playlistsorter" element={<PlaylistSorter />} />
    </Routes>
  )
}
