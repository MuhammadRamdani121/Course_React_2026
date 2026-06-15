import MenuNavbar from "./MenuNavbar";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between bg-slate-800 px-6 py-3 text-white">
      <h1 className="text-xl font-bold">Belajar React</h1>

      <nav className="flex gap-4">
        <MenuNavbar namaMenu="React" />
      </nav>
    </div>
  );
}
