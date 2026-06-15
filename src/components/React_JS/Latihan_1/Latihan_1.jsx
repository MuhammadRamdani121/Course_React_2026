import User from "./User";

export default function Latihan_1() {
  return (
    <div>
      <header>
        <h1 className="text-center text-2xl font-bold">
          Latihan Minggu 1
        </h1>
      </header>

      <main className="mt-10 grid grid-cols-1 px-6">
        <section className="m-4 grid grid-cols-2 items-center justify-center bg-red-300">
          <div>
            <User
              nama="Ramdani"
              kelas="12 IPA"
              title="Latihan 1 "
            />
          </div>
          <div>
            <User
              nama="Ramdani"
              kelas="12 IPA"
              title="Ini contoh props 2"
            />
          </div>
        </section>
        <section>
          <div>
            <User
              nama="Ramdani"
              kelas="12 IPA"
              title="Latihan 1 "
            />
          </div>
          <div>
            <User
              nama="Ramdani"
              kelas="12 IPA"
              title="Ini contoh props 2"
            />
          </div>
        </section>
      </main>
    </div>
  );
}
