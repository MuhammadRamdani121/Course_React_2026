export default function Spacing() {
  return (
    <>
      <main>
        <h1 className="text-center text-4xl">Spacing</h1>

        <section className="border text-center">
          <aside className="grid grid-cols-3 items-center justify-center">
            <article className="grid grid-cols-1 items-center justify-center">
              <h1 className="bg-red-200 bg-top-left">
                Pading
              </h1>
              <h1>Pading X/Horizontal</h1>
              <h1>Pading Y/Vertikal</h1>
              <h1>Margin</h1>
              <h1>Margin X/Horizontal</h1>
              <h1>Margin Y/Vertikal</h1>
            </article>

            <article className="w-/2 flex flex-col items-center justify-center gap-2">
              <h1 className="bg-black p-4 text-white">
                Contoh Pading Semua Arah
              </h1>
              <h1 className="bg-black px-4 text-white">
                Contoh Padding Horizontal (Width)
              </h1>
              <h1 className="bg-black py-4 text-white">
                Contoh Padding Vertikal (Height)
              </h1>
              <div className="border">
                <h1 className="m-4 bg-black text-white">
                  Contoh Margin Semua Arah
                </h1>
              </div>

              <h1>Margin X/Horizontal</h1>
              <h1>Margin Y/Vertikal</h1>
            </article>
          </aside>

          <article className="">
            <pre>
              <code>{}</code>
            </pre>
          </article>
        </section>
      </main>
    </>
  );
}
