import { useState } from "react";
import MenuNavbar from "./MenuNavbar";
import NavItems from "./NavItems";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-50 bg-slate-800 text-white">
      <div className="flex items-center justify-between px-6 py-3">
        <h1 className="text-xl font-bold">Belajar React</h1>

        {/* Tombol Mobile */}
        <button
          className="text-2xl md:hidden"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-4 md:flex">
          <NavItems link="/" nama="Home" />

          <MenuNavbar
            namaMenu="React JS"
            items={[
              {
                nama: "JSX 1",
                link: "/React_JS/Jsx_1",
              },
              {
                nama: "Component 2",
                link: "/React_JS/Component_2",
              },
            ]}
          />

          <MenuNavbar
            namaMenu="Tailwind Css"
            items={[
              {
                nama: "Dasar Tailwind",
                link: "/Tailwind_CSS/Warna",
              },
            ]}
          />

          <NavItems link="/todo" nama="Tailwind" />
        </nav>
      </div>

      {/* Mobile Menu */}
      {open && (
        <nav className="flex flex-col gap-3 px-6 pb-4 md:hidden">
          <NavItems link="/" nama="Home" />

          <MenuNavbar
            namaMenu="React JS"
            items={[
              {
                nama: "JSX 1",
                link: "/React_JS/Jsx_1",
              },
              {
                nama: "Component 2",
                link: "/React_JS/Component_2",
              },
            ]}
          />

          <MenuNavbar
            namaMenu="Tailwind Css"
            items={[
              {
                nama: "Dasar Tailwind",
                link: "/Tailwind_CSS/Warna",
              },
            ]}
          />

          <NavItems link="/todo" nama="Tailwind" />
        </nav>
      )}
    </header>
  );
}
