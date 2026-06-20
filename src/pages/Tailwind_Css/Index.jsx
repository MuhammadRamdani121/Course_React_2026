import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import MenuSidebar from "../../components/SideBar/MenuSidebar";

export default function Index() {
  const [open, setOpen] = useState(false);

  const minggu1 = [
    { nama: "Warna", link: "Warna" },
    { nama: "Typo Graphy", link: "Typography" },
    { nama: "Spacing", link: "Spacing" },
    { nama: "WidthHight", link: "WidthHight" },
    { nama: "Border", link: "Border" },
    { nama: "Rounded", link: "Rounded" },
    { nama: "Shadow", link: "Shadow" },
  ];

  const minggu2 = [
    { nama: "Flex box", link: "Flexbox" },
    { nama: "Responsive", link: "Responsive" },
  ];

  return (
    <div className="min-h-screen">
      {/* MOBILE TOPBAR */}
      <header className="sticky top-0 z-50 flex items-center justify-between border-b bg-white p-4 md:hidden">
        <button onClick={() => setOpen(true)}>
          <FaBars size={22} />
        </button>

        <h1 className="font-bold">Tailwind Roadmap</h1>
      </header>

      {/* MOBILE DRAWER */}
      {open && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/50"
            onClick={() => setOpen(false)}
          />

          <aside className="fixed top-0 left-0 z-50 h-screen w-72 overflow-y-auto border-r bg-gray-100 p-4 shadow-xl">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-bold">
                Tailwind Roadmap
              </h2>

              <button onClick={() => setOpen(false)}>
                <FaTimes size={22} />
              </button>
            </div>

            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="mb-4 block rounded bg-slate-800 p-2 text-center text-white"
            >
              ← Back to Home
            </Link>

            <MenuSidebar
              namaMenu="Minggu 1"
              basePath="/Tailwind_CSS"
              items={minggu1}
            />

            <MenuSidebar
              namaMenu="Minggu 2"
              basePath="/Tailwind_CSS"
              items={minggu2}
            />
          </aside>
        </>
      )}

      <div className="flex">
        {/* DESKTOP SIDEBAR */}
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
            items={minggu1}
          />

          <MenuSidebar
            namaMenu="Minggu 2"
            basePath="/Tailwind_CSS"
            items={minggu2}
          />
        </aside>

        {/* CONTENT */}
        <main className="min-w-0 flex-1 p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
