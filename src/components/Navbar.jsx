import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="flex items-center justify-between bg-amber-200 text-lg">
      <h1>Belajar React</h1>
      <nav className="flex gap-2">
        <Link to="/Home">Beranda</Link>
        <Link to="/Halaman2">Halaman2</Link>
      </nav>
    </div>
  );
}
