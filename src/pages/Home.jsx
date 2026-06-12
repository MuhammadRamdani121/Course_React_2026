import Button from "../components/Button";

import Navbar from "../components/Navbar";
import Todo from "../components/Todo";

export default function Home() {
  return (
    <div className="p-10">
      <Navbar />
      <h1 className="text-3xl font-bold">Belajar React</h1>
      <Button />
      <Todo />
    </div>
  );
}
