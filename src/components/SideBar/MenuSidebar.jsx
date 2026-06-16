import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import NavItems from "../Navbar/NavItems";

export default function MenuSidebar({
  namaMenu,
  items = [],
  basePath,
}) {
  const location = useLocation();

  // apakah sekarang berada di route ini
  const isActiveRoute =
    location.pathname.startsWith(basePath);

  // state buka/tutup manual
  const [open, setOpen] = useState(false);

  // agar auto open hanya sekali saat masuk route
  const prevPath = useRef("");

  useEffect(() => {
    if (
      location.pathname !== prevPath.current &&
      isActiveRoute
    ) {
      setOpen(true);
    }

    prevPath.current = location.pathname;
  }, [location.pathname, isActiveRoute]);

  return (
    <div className="mb-2">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between rounded p-2 hover:bg-gray-200"
      >
        <span>{namaMenu}</span>
        <span>{open ? "▼" : "➤"}</span>
      </button>

      {open && (
        <div className="mt-1 ml-4 flex flex-col gap-1">
          {items.map((item) => (
            <NavItems
              key={item.link}
              link={item.link}
              nama={item.nama}
            />
          ))}
        </div>
      )}
    </div>
  );
}
