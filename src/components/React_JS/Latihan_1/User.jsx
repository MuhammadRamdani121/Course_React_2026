export default function User({ nama, kelas, title }) {
  return (
    <div>
      <h1>{title}</h1>
      <div>
        <h1>{nama}</h1>
        <h1>{kelas}</h1>
      </div>
    </div>
  );
}
