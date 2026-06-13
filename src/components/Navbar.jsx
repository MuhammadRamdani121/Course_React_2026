import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-slate-800 text-white shadow-md">
      <div className="flex items-center justify-between px-6 py-3">
        <h1 className="text-xl font-bold">
          Belajar React 🚀
        </h1>

        <nav className="flex gap-3">
          <Link
            to="/"
            className="rounded px-3 py-2 hover:bg-slate-700"
          >
            Home
          </Link>

          <Link
            to="/minggu_1"
            className="rounded px-3 py-2 hover:bg-slate-700"
          >
            Minggu 1
          </Link>

          <Link
            to="/TodoHalaman"
            className="rounded px-3 py-2 hover:bg-slate-700"
          >
            Todo
          </Link>

          <Link
            to="/Halaman2"
            className="rounded px-3 py-2 hover:bg-slate-700"
          >
            Halaman 2
          </Link>
        </nav>
      </div>
    </header>
  );
}
