import { Link, Outlet } from "react-router-dom";
import MenuSidebar from "../../components/SideBar/MenuSidebar";

export default function Minggu_1() {
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
          React Roadmap
        </h2>

        <MenuSidebar
          namaMenu="Minggu 1"
          basePath="/minggu_1"
          items={[
            {
              nama: "JSX",
              link: "Jsx_1",
            },
            {
              nama: "Component",
              link: "Component_2",
            },
            {
              nama: "Props",
              link: "Props_3",
            },
            {
              nama: "Event Klik",
              link: "Event_4",
            },
            {
              nama: "Latihan 1",
              link: "Latihan_1",
            },
          ]}
        />
        <MenuSidebar
          namaMenu="Minggu 1"
          basePath="/minggu_1"
          items={[
            {
              nama: "JSX",
              link: "Jsx_1",
            },
            {
              nama: "Component",
              link: "Component_2",
            },
            {
              nama: "Props",
              link: "Props_3",
            },
            {
              nama: "Event Klik",
              link: "Event_4",
            },
            {
              nama: "Latihan 1",
              link: "Latihan_1",
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
