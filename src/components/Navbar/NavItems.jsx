import { NavLink } from "react-router-dom";

export default function NavItems({ link, nama }) {
  return (
    <NavLink
      to={link}
      className={({ isActive }) =>
        `block rounded p-2 transition-colors ${
          isActive
            ? "bg-slate-800 text-white"
            : "hover:bg-gray-200"
        }`
      }
    >
      {nama}
    </NavLink>
  );
}
