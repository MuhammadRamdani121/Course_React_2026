export default function Shadow() {
  return (
    <div>
      <h1 className="text-center text-4xl font-bold">
        Shadow
      </h1>

      <main>
        <section className="grid grid-cols-2 items-center justify-center">
          <article className="grid items-center justify-center border">
            <h1 className="shadow">shadow </h1>
            <h1 className="shadow-sm">shadow sm</h1>
            <h1 className="shadow-md">shadow md</h1>
            <h1 className="shadow-lg">shadow lg</h1>
          </article>

          <article className="border">
            <pre className="grid items-center justify-center">
              <code>{` <h1 className="shadow">shadow </h1>`}</code>
              <code>{` <h1 className="shadow-sm">shadow sm</h1>`}</code>
              <code>{` <h1 className="shadow-md">shadow md</h1>`}</code>
              <code>{` <h1 className="shadow-lg">shadow lg</h1>`}</code>
            </pre>
          </article>
        </section>
      </main>
    </div>
  );
}
