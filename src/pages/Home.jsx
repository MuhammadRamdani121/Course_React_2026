import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="p-10">
      <Navbar />
      <Sidebar />
      <h1 className="text-3xl font-bold">Belajar React</h1>
    </div>
  );
}
