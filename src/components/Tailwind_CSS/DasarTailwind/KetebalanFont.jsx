export default function KetebalanFont() {
  return (
    <>
      <main>
        <h1>Ketebalan Font</h1>
      </main>

      <section className="flex">
        <aside className="w-1/2">
          <h1 className="font-light">Font Light</h1>
          <h1 className="font-medium">Font Mediumm</h1>
          <h1 className="font-bold">Font BOld</h1>
        </aside>

        <article className="flex w-1/2">
          <pre className="flex flex-col">
            <code>{` <h1 className="font-light"></h1>`}</code>
            <code>{` <h1 className="font-medium"></h1>`}</code>
            <code>{` <h1 className="font-bold"></h1>`}</code>
          </pre>
        </article>
      </section>
      <h1></h1>
    </>
  );
}
