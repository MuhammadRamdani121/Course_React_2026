import NavItems from "./NavItems";

export default function MenuNavbar({ namaMenu }) {
  return (
    <div className="group relative">
      <button className="px-3 py-2 hover:text-blue-400">
        {namaMenu} ▼
      </button>

      <div className="absolute top-full left-0 hidden w-44 rounded bg-white text-black shadow-lg group-hover:block">
        <NavItems link="/minggu_1/Jsx_1" nama="JSX 1" />

        <NavItems
          link="/minggu_1/Component_2"
          nama="Component 2"
        />
      </div>
    </div>
  );
}
