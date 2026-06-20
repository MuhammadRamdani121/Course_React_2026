import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import NavItems from "../Navbar/NavItems";

export default function MenuSidebar({
  namaMenu,
  items = [],
  basePath,
}) {
  const location = useLocation();

  const isActiveRoute =
    location.pathname.startsWith(basePath);

  const [open, setOpen] = useState(false);

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
    <>
      {/* MOBILE NAVBAR */}
      <div className="sticky top-0 z-40 border-b border-gray-200 bg-white md:hidden">
        <div className="px-3 py-2">
          <div className="scrollbar-hide flex gap-2 overflow-x-auto">
            {items.map((item) => (
              <NavItems
                key={item.link}
                link={item.link}
                nama={item.nama}
              />
            ))}
          </div>
        </div>
      </div>

      {/* DESKTOP SIDEBAR */}
      <div className="hidden w-full border-b border-gray-200 md:block">
        <button
          onClick={() => setOpen(!open)}
          className="flex w-full items-center justify-between px-4 py-3 text-left hover:bg-gray-100"
        >
          <span className="font-medium">{namaMenu}</span>

          <span
            className={`transition-transform duration-300 ${
              open ? "rotate-90" : ""
            }`}
          >
            ➤
          </span>
        </button>

        <div
          className={`overflow-hidden transition-all duration-300 ${
            open
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="ml-4 flex flex-col gap-1 py-2">
            {items.map((item) => (
              <NavItems
                key={item.link}
                link={item.link}
                nama={item.nama}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
