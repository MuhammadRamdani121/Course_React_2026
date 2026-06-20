export default function Flexbox() {
  return (
    <div>
      <h1 className="pb-2 text-center text-4xl font-bold">
        Flex Box
      </h1>

      <main className="grid gap-4 border px-6">
        <section className="grid items-center justify-center border p-4">
          <h1 className="text-center">
            Flex default (Cols)
          </h1>
          <div className="flex gap-2 border">
            <h1 className="border border-red-400">
              Contoh kotak 1
            </h1>
            <h1 className="border">Contoh kotak 2</h1>
            <h1 className="border">Contoh kotak 3</h1>
            <h1 className="border">Contoh kotak 4</h1>
          </div>
        </section>

        <section className="border">
          <h1 className="text-center">Flex Baris (Row)</h1>
          <div className="flex flex-row gap-2 border">
            <h1 className="border">Contoh kotak 1</h1>
            <h1 className="border">Contoh kotak 2</h1>
            <h1 className="border">Contoh kotak 3</h1>
            <h1 className="border">Contoh kotak 4</h1>
          </div>
        </section>

        <section>
          <h1 className="text-center">Flex Kolom (cols)</h1>
          <div className="flex flex-col gap-2 border">
            <h1 className="border">Contoh kotak 1</h1>
            <h1 className="border">Contoh kotak 2</h1>
            <h1 className="border">Contoh kotak 3</h1>
            <h1 className="border">Contoh kotak 4</h1>
          </div>
        </section>

        <section>
          <h1 className="text-center">
            Flex Reverse Baris (Row)
          </h1>
          <div className="flex flex-row-reverse gap-2 border">
            <h1 className="border">Contoh kotak 1</h1>
            <h1 className="border">Contoh kotak 2</h1>
            <h1 className="border">Contoh kotak 3</h1>
            <h1 className="border">Contoh kotak 4</h1>
          </div>
        </section>

        <section>
          <h1 className="text-center">
            Flex Reverse Kolom (Col)
          </h1>
          <div className="flex flex-col-reverse gap-2 border">
            <h1 className="border">Contoh kotak 1</h1>
            <h1 className="border">Contoh kotak 2</h1>
            <h1 className="border">Contoh kotak 3</h1>
            <h1 className="border">Contoh kotak 4</h1>
          </div>
        </section>

        <section>
          <article>
            <pre>
              <code></code>
            </pre>
          </article>
        </section>
      </main>
    </div>
  );
}
