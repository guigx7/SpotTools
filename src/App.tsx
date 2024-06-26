//src/App.tsx

import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { PlaylistSorter } from "./pages/PlaylistSorter/PlaylistSorter";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/playlistsorter" element={<PlaylistSorter />} />
    </Routes>
  )
}
