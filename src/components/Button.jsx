export default function Button() {
  return (
    <div>
      <h1>Components</h1>
      <button className="rounded bg-blue-400 px-4 py-2 text-white">
        Klik Saya
      </button>
    </div>
  );
}
// Props
export function ButtonTitle({ title, onClick }) {
  return (
    <button
      className="rounded bg-blue-500 px-4 py-2 text-white"
      onClick={onClick}
    >
      {title}
    </button>
  );
}
