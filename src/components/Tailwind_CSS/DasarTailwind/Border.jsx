export default function Border() {
  return (
    <div>
      <h1 className="text-center text-4xl font-bold">
        Border
      </h1>
      <main>
        <section className="grid grid-cols-2 items-center justify-center border text-center">
          <article className="grid gap-1">
            <h1 className="border-2">border</h1>
            <h1 className="border-2">
              border ketebalan border
            </h1>
            <h1 className="border-gray border">
              Background border
            </h1>
          </article>
          <aside className="border">
            <pre className="flex flex-col gap-2 border">
              <code>
                {` <h1 className="border-2">border</h1>`}
              </code>
              <code>
                {` <h1 className="border-2">border</h1>`}
              </code>
              <code>
                {` <h1 className="border-2">border</h1>`}
              </code>
            </pre>
          </aside>
        </section>
      </main>
    </div>
  );
}
