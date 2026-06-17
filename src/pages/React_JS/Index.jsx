import { Link, Outlet } from "react-router-dom";
import MenuSidebar from "../../components/SideBar/MenuSidebar";

export default function Index() {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 border-r bg-gray-100 p-4">
        <Link
          to="/"
          className="mb-4 block rounded bg-slate-800 p-2 text-center text-white hover:bg-slate-700"
        >
          ← Back to Home
        </Link>

        <h2 className="mb-4 text-xl font-bold">
          React JS Roadmap
        </h2>

        <MenuSidebar
          namaMenu="Minggu 1"
          basePath="/React_JS"
          items={[
            {
              nama: "JSX",
              link: "JSX_1",
            },
            {
              nama: "Spacing",
              link: "Spacing",
            },
            {
              nama: "Sizing",
              link: "Sizing",
            },
            {
              nama: "Flexbox",
              link: "Flexbox",
            },
            {
              nama: "Latihan 1",
              link: "Latihan_1",
            },
          ]}
        />

        <MenuSidebar
          namaMenu="Minggu 2"
          basePath="/Tailwind_CSS"
          items={[
            {
              nama: "Grid",
              link: "Grid",
            },
            {
              nama: "Responsive",
              link: "Responsive",
            },
          ]}
        />
      </aside>

      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
}
