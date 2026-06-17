export default function KetebalanFont() {
  return (
    <>
      <main>
        <h1 className="pb-4 text-center text-4xl font-bold">
          Ukuran Pada Text
        </h1>
      </main>

      <section className="flex border">
        <aside className="flex w-1/2 flex-col items-center justify-center">
          <h1 className="font-light">Font Light</h1>
          <h1 className="font-medium">Font Mediumm</h1>
          <h1 className="font-bold">Font Bold</h1>
        </aside>

        <article className="flex w-1/2 flex-col items-center justify-center">
          <pre className="flex flex-col">
            <code>{` <h1 className="font-light"></h1>`}</code>
            <code>{` <h1 className="font-medium"></h1>`}</code>
            <code>{` <h1 className="font-bold"></h1>`}</code>
          </pre>
        </article>
      </section>

      <section className="flex items-center justify-center border pt-4">
        <aside className="flex w-1/2 flex-col items-center justify-center">
          <h1 className="text-sm">Small Text</h1>
          <h1 className="text-lg">Large text</h1>
          <h1 className="text-2xl">2XL Text</h1>
          <h1 className="text-4xl">4XL Text</h1>
          <h1></h1>
        </aside>

        <article className="w-1/2">
          <pre className="flex flex-col items-center justify-center">
            <code>{`<h1 className="text-sm"></h1>`}</code>
            <code>{`<h1 className="text-lg"></h1>`}</code>
            <code>{`<h1 className="text-2xl"></h1>`}</code>
            <code>{`<h1 className="text-4xl></h1>`}</code>
          </pre>
        </article>
      </section>
      <h1></h1>
    </>
  );
}
