import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Navbar2 from "../components/Navbar/Navbar2";

export default function Home() {
  return (
    <div className="p-10">
      <Navbar />
      <Sidebar />
      <Navbar2 />
      <h1 className="text-3xl font-bold">Belajar React</h1>
    </div>
  );
}
