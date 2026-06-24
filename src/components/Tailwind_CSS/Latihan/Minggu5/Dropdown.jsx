import { useState } from "react";
export default function Dropdown() {
  // Bikin UseStatenya setelah diimport
  const [open, setOpen] = useState(false);

  return (
    <div>
      <h1 className="text-center text-4xl font-bold">
        Challenge 5 - DropDown
      </h1>
      <main>
        <section className="relative inline-block">
          <button
            onClick={() => setOpen(!open)}
            className="rounded bg-blue-400 px-4 py-2 text-white"
          >
            Profile ▼
          </button>
          {open && (
            <ul className="absolute mt-2 w-40 rounded border bg-white shadow">
              <li className="p-2 hover:bg-gray-200">
                Profile
              </li>
              <li className="p-2 hover:bg-gray-200">
                Profile
              </li>
              <li className="p-2 hover:bg-gray-200">
                Profile
              </li>
            </ul>
          )}
        </section>
      </main>
    </div>
  );
}
