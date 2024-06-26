//src/pages/Home/Home.tsx

import { Link } from "react-router-dom";

export function Home(){
  return (
    <>
      <h2>home</h2>
      <Link to="/playlistsorter">PlaylistSorter</Link>
    </>
  )
}