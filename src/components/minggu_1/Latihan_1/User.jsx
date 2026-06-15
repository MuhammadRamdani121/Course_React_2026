export default function User({ nama, kelas }) {
  return (
    <div>
      <h1>Ini Component Untuk Diprops</h1>
      <div>
        <h1>{nama}</h1>
        <h1>{kelas}</h1>
      </div>
    </div>
  );
}
