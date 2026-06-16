import MenuNavbar from "./MenuNavbar";
import NavItems from "./NavItems";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between bg-slate-800 px-6 py-3 text-white">
      <h1 className="text-xl font-bold">Belajar React</h1>

      <nav className="flex items-center gap-4">
        <NavItems link="/" nama="Home" />

        <MenuNavbar
          namaMenu="React JS"
          items={[
            {
              nama: "JSX 1",
              link: "/minggu_1/Jsx_1",
            },
            {
              nama: "Component 2",
              link: "/minggu_1/Component_2",
            },
          ]}
        />

        <NavItems link="/todo" nama="Tailwind" />
      </nav>
    </div>
  );
}
