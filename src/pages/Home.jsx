import Navbar from "../components/Navbar/Navbar";
import LoginPage from "../components/Tailwind_CSS/Latihan/Minggu1/LoginPage";
import ProfileCard from "../components/Tailwind_CSS/Latihan/Minggu2/ProfileCard";

export default function Home() {
  return (
    <div>
      <Navbar />

      <main>
        <section>
          <LoginPage />
        </section>
        <hr />
        <section>
          <ProfileCard />
        </section>
      </main>
    </div>
  );
}
