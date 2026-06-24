import NavbarLatihan from "../components/Tailwind_CSS/Latihan/Minggu3/Navbar";
import Navbar from "../components/Navbar/Navbar";
import LoginPage from "../components/Tailwind_CSS/Latihan/Minggu1/LoginPage";
import ProfileCard from "../components/Tailwind_CSS/Latihan/Minggu2/ProfileCard";
import Badge from "../components/Tailwind_CSS/Latihan/Minggu4/Badge";
import Dropdown from "../components/Tailwind_CSS/Latihan/Minggu5/Dropdown";

export default function Home() {
  return (
    <div>
      <Navbar />

      <main>
        <section>
          <LoginPage />
        </section>
        <hr />
        <section className="">
          <ProfileCard />
        </section>
        <hr />
        <section>
          <NavbarLatihan />
        </section>
        <hr />
        <section>
          <Badge />
        </section>
        <hr />
        <section>
          <Dropdown />
        </section>
      </main>
    </div>
  );
}
