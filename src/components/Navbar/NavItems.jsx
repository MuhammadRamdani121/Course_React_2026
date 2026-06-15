import { Link } from "react-router-dom";

export default function NavItems({ link, nama }) {
  return (
    <Link
      to={link}
      className="block px-4 py-2 hover:bg-slate-200"
    >
      {nama}
    </Link>
  );
}
