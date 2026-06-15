import User from "../Latihan_1/User";

export default function Latihan_1() {
  return (
    <div>
      <header>
        <h1 className="text-center text-2xl font-bold">
          Latihan Minggu 1
        </h1>
      </header>

      <main className="mt-10 grid grid-cols-2 px-6">
        <section>
          <div>
            <User nama="Ramdani" kelas="12 IPA" />
          </div>
          <div>
            <User nama="Ramdani" kelas="12 IPA" />
          </div>
        </section>
      </main>
    </div>
  );
}
