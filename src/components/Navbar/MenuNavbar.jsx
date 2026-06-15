import NavItems from "./NavItems";

export default function MenuNavbar({ namaMenu, items }) {
  return (
    <div className="group relative">
      <button className="px-3 py-2 hover:text-blue-400">
        {namaMenu} ▼
      </button>

      <div className="absolute top-full left-0 hidden min-w-40 rounded-md bg-white text-black shadow-lg group-hover:block">
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
