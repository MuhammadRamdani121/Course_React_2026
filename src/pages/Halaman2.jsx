import Counter from "../components/Counter";
import Navbar from "../components/Navbar";

export default function Halaman2() {
  return (
    <div className="p-10">
      <Navbar />
      <h1 className="text-3xl font-bold">Belajar React</h1>

      <div>
        <Counter className="bg-red-900 text-lg" />
      </div>
    </div>
  );
}
