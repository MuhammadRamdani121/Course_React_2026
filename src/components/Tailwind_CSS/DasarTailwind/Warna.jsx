export default function Warna() {
  return (
    <main>
      <h1 className="pb-6 text-center text-4xl font-bold">
        Style Untuk Warna
      </h1>

      <section className="my-2 flex flex-col gap-4 border p-4 md:flex-row md:items-center md:justify-center">
        <aside className="flex w-full flex-col items-center gap-2 text-center md:w-1/2">
          <h1 className="w-full max-w-xs bg-blue-300">
            Contoh Warna Background
          </h1>

          <h1 className="w-full max-w-xs bg-black text-white">
            Contoh Warna Text
          </h1>

          <h1 className="w-full max-w-xs border border-red-400">
            Contoh Warna Border
          </h1>
        </aside>

        <article className="w-full overflow-x-auto md:w-auto">
          <pre className="flex flex-col gap-2">
            <code>{`<h1 className="bg-blue-300"></h1>`}</code>
            <code>{`<h1 className="text-white"></h1>`}</code>
            <code>{`<h1 className="border border-red-400"></h1>`}</code>
          </pre>
        </article>
      </section>
    </main>
  );
}
