export default function Spacing() {
  return (
    <>
      <main>
        <h1 className="text-center text-4xl">Spacing</h1>

        <section className="grid grid-cols-3 items-center justify-center gap-1 border">
          <article className="grid items-center justify-center gap-8 border text-center">
            <h1>Padding</h1>
            <h1>Padding Horizontal (X)</h1>
            <h1>Padding Vertikal (Y)</h1>
            <h1>Margin</h1>
            <h1>Margin Horizontal (X)</h1>
            <h1>Margin Vertikal (Y)</h1>
          </article>

          <article className="grid gap-2 border border-black text-white">
            <div className="border">
              <h1 className="bg-black p-4 text-white">
                Padding p*4
              </h1>
            </div>
            <div className="border">
              <h1 className="bg-black px-4 text-white">
                Padding Horizontal (X) px*4
              </h1>
            </div>
            <div className="border">
              <h1 className="bg-black py-4 text-white">
                Padding Vertical (Y) py*4
              </h1>
            </div>

            <div className="border border-black bg-white">
              <h1 className="m-4 bg-black">Margin m*4</h1>
            </div>
            <div className="border border-black bg-white">
              <h1 className="mx-4 bg-black">
                Margin Horizontal (X) mx*4
              </h1>
            </div>
            <div className="border border-black bg-white">
              <h1 className="my-4 bg-black">
                Margin Vertikal (Y) my*4
              </h1>
            </div>
            {/*  */}
          </article>

          <article className="grid items-center justify-center gap-8 border">
            <pre>
              <code>{`<h1 className="p-4 "></h1>`}</code>
            </pre>
            <pre>
              <code>{`<h1 className="pX-4 "></h1>`}</code>
            </pre>
            <pre>
              <code>{`<h1 className="pY-4 "></h1>`}</code>
            </pre>
            <pre>
              <code>{`<h1 className="m-4 "></h1>`}</code>
            </pre>
            <pre>
              <code>{`<h1 className="mx-4 "></h1>`}</code>
            </pre>
            <pre>
              <code>{`<h1 className="my-4 "></h1>`}</code>
            </pre>
          </article>
        </section>
      </main>
    </>
  );
}
