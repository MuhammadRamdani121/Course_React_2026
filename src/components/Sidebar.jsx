import { Link } from "react-router-dom";
export default function Sidebar() {
  return (
    <div className="-py-3 flex items-center justify-between bg-slate-800 px-6 text-white">
      <h1 className="text-xl font-bold">Belajar React</h1>

      <nav className="flex gap-4">
        <Link>Home</Link>
      </nav>
    </div>
  );
}
