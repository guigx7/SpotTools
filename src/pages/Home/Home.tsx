//src/pages/Home/Home.tsx

import { Link } from "react-router-dom";

export function Home(){
  return (
    <div className="bg-dark text-light text-center">
      <h1>Home</h1>
      <div className="text-center">
        <button className="bg-green-500 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3"><Link to="/playlistsorter">PlaylistSorter</Link></button>

      </div>
    </div>
  )
}