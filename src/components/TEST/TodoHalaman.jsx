import Navbar from "../components/Navbar";
import ReadTodo from "../components/ReadTodo";
export default function TodoHalaman() {
  return (
    <div className="p-10">
      <Navbar />
      <h1 className="text-3xl font-bold">Belajar React</h1>

      <div>
        <ReadTodo />
      </div>
    </div>
  );
}
