export default function Rounded() {
  return (
    <div>
      <h1 className="pb-2 text-center text-4xl font-bold">
        Rounded
      </h1>
      <main>
        <section className="grid grid-cols-2 items-center justify-center border">
          <article className="flex flex-col items-center justify-center gap-2">
            <h1 className="rounded border">Rounded</h1>
            <h1 className="rounded-md border p-2">
              Rounded md
            </h1>
            <h1 className="rounded-lg border p-2">
              Rounded lg
            </h1>
            <h1 className="rounded-xl border p-2">
              Rounded xl
            </h1>
            <h1 className="rounded-full border p-2">
              Rounded full
            </h1>
          </article>
          <article>
            <pre className="flex flex-col gap-2">
              <code>{`<h1 className="rounded"></h1>`}</code>
              <code>{`<h1 className="rounded-md"></h1>`}</code>
              <code>{`<h1 className="rounded-lg"></h1>`}</code>
              <code>{`<h1 className="rounded-xl"></h1>`}</code>
              <code>{`<h1 className="rounded-full"></h1>`}</code>
            </pre>
          </article>
        </section>
      </main>
    </div>
  );
}
