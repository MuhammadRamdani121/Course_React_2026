import { Link } from "react-router-dom";
export default function NavItems({ link, nama }) {
  return (
    <div>
      <Link to={link}>{nama}</Link>
    </div>
  );
}
