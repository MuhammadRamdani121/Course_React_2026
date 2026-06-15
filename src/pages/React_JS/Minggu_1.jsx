import { Link, Outlet } from "react-router-dom";

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
          Minggu 1|React JS
        </h2>

        <div className="flex flex-col gap-2">
          <Link
            to="Jsx_1"
            className="rounded p-2 hover:bg-gray-200"
          >
            JSX
          </Link>

          <Link
            to="Component_2"
            className="rounded p-2 hover:bg-gray-200"
          >
            Component
          </Link>

          <Link
            to="Props_3"
            className="rounded p-2 hover:bg-gray-200"
          >
            Props
          </Link>

          <Link
            to="Event_4"
            className="rounded p-2 hover:bg-gray-200"
          >
            Event Klik
          </Link>

          <Link
            to="Latihan_1"
            className="rounded p-2 hover:bg-gray-200"
          >
            Latihan 1
          </Link>
        </div>
      </aside>

      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
}
