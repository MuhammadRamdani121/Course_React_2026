export default function Flexbox() {
  return (
    <div>
      <h1 className="pb-2 text-center text-4xl font-bold">
        Flex Box
      </h1>

      <main className="grid gap-4 border px-6">
        <section className="m-1 grid border p-4">
          <h1 className="text-center">
            Flex default (Cols)
          </h1>
          <article className="grid grid-cols-2 items-center justify-center gap-2">
            <aside className="flex gap-2 border">
              <h1 className="border border-red-400">
                Contoh kotak 1
              </h1>
              <h1 className="border border-amber-400">
                Contoh kotak 2
              </h1>
              <h1 className="border border-blue-400">
                Contoh kotak 3
              </h1>
              <h1 className="border border-yellow-400">
                Contoh kotak 4
              </h1>
            </aside>

            <aside className="border">
              <pre className="border">
                <code className="flex">{`<aside className="flex gap-2 border">
<h1 className="border border-red-400">
Contoh kotak 1
</h1>
<h1 className="border border-amber-400">
Contoh kotak 2
</h1>
<h1 className="border border-blue-400">
Contoh kotak 3
</h1>
<h1 className="border border-yellow-400">
Contoh kotak 4
</h1>
</aside>`}</code>
              </pre>
            </aside>
          </article>
        </section>

        <section className="border">
          <h1 className="text-center">Flex Baris (Row)</h1>
          <article className="flex">
            <aside className="flex items-center justify-center p-4">
              <div className="flex flex-row gap-2 border">
                <h1 className="border border-red-400">
                  Contoh kotak 1
                </h1>
                <h1 className="border border-amber-400">
                  Contoh kotak 2
                </h1>
                <h1 className="border border-blue-400">
                  Contoh kotak 3
                </h1>
                <h1 className="border border-yellow-400">
                  Contoh kotak 4
                </h1>
              </div>
            </aside>

            <aside>
              <pre>
                <code className="flex items-center justify-center">{` 
<div className="flex flex-row gap-2 border">
<h1 className="border border-red-400">
  Contoh kotak 1
</h1>
<h1 className="border border-amber-400">
  Contoh kotak 2
</h1>
<h1 className="border border-blue-400">
  Contoh kotak 3
</h1>
<h1 className="border border-yellow-400">
  Contoh kotak 4
</h1>
</div>`}</code>
              </pre>
            </aside>
          </article>
        </section>

        <section>
          <h1 className="text-center">Flex Kolom (cols)</h1>
          <article className="grid grid-cols-2 border">
            <aside className="grid items-center justify-center">
              <div className="flex flex-col gap-2 border">
                <h1 className="border border-red-400">
                  Contoh kotak 1
                </h1>
                <h1 className="border border-amber-400">
                  Contoh kotak 2
                </h1>
                <h1 className="border border-blue-400">
                  Contoh kotak 3
                </h1>
                <h1 className="border border-yellow-400">
                  Contoh kotak 4
                </h1>
              </div>
            </aside>
            <aside>
              <pre>
                <code>{`<aside>
<div className="flex flex-col gap-2 border">
  <h1 className="border border-red-400">
    Contoh kotak 1
  </h1>
  <h1 className="border border-amber-400">
    Contoh kotak 2
  </h1>
  <h1 className="border border-blue-400">
    Contoh kotak 3
  </h1>
  <h1 className="border border-yellow-400">
    Contoh kotak 4
  </h1>
</div>
</aside>`}</code>
              </pre>
            </aside>
          </article>
        </section>

        <section className="border">
          <h1 className="text-center">
            Flex Reverse Baris (Row)
          </h1>
          <article className="flex items-center justify-center p-4">
            <aside>
              <div className="flex flex-row-reverse gap-2 border">
                <h1 className="border border-red-400">
                  Contoh kotak 1
                </h1>
                <h1 className="border border-amber-400">
                  Contoh kotak 2
                </h1>
                <h1 className="border border-blue-400">
                  Contoh kotak 3
                </h1>
                <h1 className="border border-yellow-400">
                  Contoh kotak 4
                </h1>
              </div>
            </aside>

            <aside>
              <pre>
                <code>{`<aside>
                <div className="flex flex-row-reverse gap-2 border">
                <h1 className="border border-red-400">
                  Contoh kotak 1
                </h1>
                <h1 className="border border-amber-400">
                  Contoh kotak 2
                </h1>
                <h1 className="border border-blue-400">
                  Contoh kotak 3
                </h1>
                <h1 className="border border-yellow-400">
                  Contoh kotak 4
                </h1>
              </div>
            </aside>`}</code>
              </pre>
            </aside>
          </article>
        </section>

        <section className="border">
          <h1 className="text-center">
            Flex Reverse Kolom (Col)
          </h1>
          <article className="grid grid-cols-2 items-center justify-center gap-4 p-4">
            <aside>
              <div className="flex flex-col-reverse gap-2 overflow-scroll text-center">
                <h1 className="border border-red-400">
                  Contoh kotak 1
                </h1>
                <h1 className="border border-amber-400">
                  Contoh kotak 2
                </h1>
                <h1 className="self-end border border-blue-400">
                  Contoh kotak 3
                </h1>
                <h1 className="self-start border border-yellow-400">
                  Contoh kotak 4
                </h1>
              </div>
            </aside>

            <aside>
              <pre>
                <code>{`
<aside>
<div className="flex flex-col-reverse gap-2 border">
<h1 className="border border-red-400">
  Contoh kotak 1
</h1>
<h1 className="border border-amber-400">
  Contoh kotak 2
</h1>
<h1 className="border border-blue-400">
  Contoh kotak 3
</h1>
<h1 className="border border-yellow-400">
  Contoh kotak 4
</h1>
</div>
</aside>`}</code>
              </pre>
            </aside>
          </article>
        </section>
      </main>
    </div>
  );
}
