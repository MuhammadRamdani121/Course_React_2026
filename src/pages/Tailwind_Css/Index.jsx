import { Link, Outlet } from "react-router-dom";
import MenuSidebar from "../../components/SideBar/MenuSidebar";
import MenuNavbar from "../../components/Navbar/MenuNavbar";

export default function Index() {
  const menuMinggu1 = [
    {
      nama: "Warna",
      link: "Warna",
    },
    // {
    //   nama: "Component",
    //   link: "Component_2",
    // },
  ];

  return (
    <div className="flex min-h-screen">
      {/* Sidebar Desktop */}
      <aside className="hidden w-64 border-r bg-gray-100 p-4 md:block">
        <Link
          to="/"
          className="mb-4 block rounded bg-slate-800 p-2 text-center text-white hover:bg-slate-700"
        >
          ← Back to Home
        </Link>

        <h2 className="mb-4 text-xl font-bold">
          Tailwind Roadmap
        </h2>

        <MenuSidebar
          namaMenu="Minggu 1"
          basePath="/Tailwind_CSS"
          items={menuMinggu1}
        />
      </aside>

      {/* Content */}
      <main className="flex-1 p-6">
        {/* Navbar Mobile */}
        <div className="mb-4 md:hidden">
          <Link
            to="/"
            className="mb-3 block rounded bg-slate-800 p-2 text-center text-white hover:bg-slate-700"
          >
            ← Back to Home
          </Link>

          <MenuNavbar
            namaMenu="Minggu 1"
            items={menuMinggu1}
          />
        </div>

        <Outlet />
      </main>
    </div>
  );
}
