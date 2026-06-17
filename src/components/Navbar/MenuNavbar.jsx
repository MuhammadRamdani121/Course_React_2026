import NavItems from "./NavItems";

export default function MenuNavbar({ namaMenu, items }) {
  return (
    <div className="group relative">
      <button className="px-3 py-2 hover:text-blue-400">
        {namaMenu} ▼
      </button>

      <div className="absolute top-full left-0 z-50 hidden min-w-40 overflow-hidden rounded-md bg-white text-black shadow-lg group-hover:block">
        {items.map((item, index) => (
          <NavItems
            key={index}
            link={item.link}
            nama={item.nama}
          />
        ))}
      </div>
    </div>
  );
}
