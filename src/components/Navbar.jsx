import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between bg-slate-800 px-6 py-3 text-white">
      <h1 className="text-xl font-bold">Belajar React</h1>

      <nav className="flex gap-4">
        <Link to="/">Home</Link>

        <div className="group relative">
          <button>Minggu 1 ▼</button>

          <div className="absolute left-0 hidden min-w-40 rounded bg-white text-black shadow-lg group-hover:block">
            <Link
              to="/minggu_1/Jsx_1"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              JSX
            </Link>

            <Link
              to="/minggu_1/Props_2"
              className="block px-4 py-2 hover:bg-gray-100"
            >
              Props
            </Link>
          </div>
        </div>

        <Link to="/TodoHalaman">Todo</Link>
        <Link to="/Halaman2">Halaman 2</Link>
      </nav>
    </div>
  );
}
